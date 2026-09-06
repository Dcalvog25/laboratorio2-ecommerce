import { useEffect, useMemo, useRef } from "react";
import { createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { autocomplete } from "@algolia/autocomplete-js";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { debounce } from "@algolia/autocomplete-shared";
import { useSearchBox } from "react-instantsearch";
import searchClient from "../services/algolia";
import "../styles/SearchBar.css";

export default function SearchBar() {
    const containerRef = useRef(null);
    const panelRootRef = useRef(null);
    const panelDomRef = useRef(null);

    const { query, refine } = useSearchBox();

    const refineRef = useRef(refine);
    useEffect(() => {
        refineRef.current = refine;
    }, [refine]);

    const debouncedRefine = useMemo(
        () => debounce((value) => refineRef.current(value), 300),
        []
    );

    useEffect(() => {
        if (!containerRef.current) return;

        const search = autocomplete({
            container: containerRef.current,
            panelContainer: containerRef.current, // se coloca en div
            placeholder: "Buscar productos...",
            openOnFocus: true,
            initialState: { query },
            detachedMediaQuery: "none",

            onSubmit({ state }) {
                refineRef.current(state.query);
            },
            onReset() {
                refineRef.current("");
            },
            onStateChange({ prevState, state }) {
                if (prevState.query !== state.query) {
                    debouncedRefine(state.query);
                }
            },

            renderer: { createElement, Fragment, render: () => {} },
            render({ children }, root) {
                if (!panelRootRef.current || panelDomRef.current !== root) {
                    panelDomRef.current = root;
                    panelRootRef.current?.unmount();
                    panelRootRef.current = createRoot(root);
                }
                panelRootRef.current.render(children);
            },

            getSources({ query }) {
                if (!query) return [];

                return [
                    {
                        sourceId: "productosAutocompletado",
                        getItems() {
                            return getAlgoliaResults({
                                searchClient,
                                queries: [{
                                        indexName: import.meta.env.VITE_ALGOLIA_INDEX_NAME,
                                        params: { query, hitsPerPage: 5 },
                                    },
                                ],
                            });
                        },

                        onSelect({ item, setIsOpen }) {
                            refineRef.current(item.title ?? query);
                            setIsOpen(false);
                        },

                        templates: {
                            item({ item }) {
                                return (
                                    <div className="ctg-autocomplete-item">
                                        <strong>{item.title}</strong>
                                        {item.model ? <p>{item.model}</p> : null}
                                    </div>
                                );
                            },
                            noResults() {
                                return (
                                    <div className="ctg-autocomplete-empty">
                                        Sin resultados
                                    </div>
                                );
                            },
                        },
                    },
                ];
            },
        });

        return () => {
            search.destroy();
            panelRootRef.current?.unmount();
            panelRootRef.current = null;
        };
    }, []);

    return <div className="ctg-search-bar" ref={containerRef} />;
}