import { Pagination as InstantSearchPagination, useInstantSearch } from "react-instantsearch";
import "../styles/Pagination.css";

export default function Pagination() {
    const { results } = useInstantSearch();

    if (results?.__isArtificial || !results?.nbPages || results.nbPages <= 1) {
        return null;
    }

    return (
        <nav className="catalog-pagination" aria-label="Paginación del catálogo">
            <InstantSearchPagination
                padding={2}
                showFirst
                showLast
                translations={{
                    firstPageItemText: "Primera",
                    previousPageItemText: "Anterior",
                    nextPageItemText: "Siguiente",
                    lastPageItemText: "Última",
                    pageItemText: ({ currentPage }) => `Página ${currentPage}`,
                    firstPageItemAriaLabel: "Ir a la primera página",
                    previousPageItemAriaLabel: "Ir a la página anterior",
                    nextPageItemAriaLabel: "Ir a la página siguiente",
                    lastPageItemAriaLabel: "Ir a la última página",
                    pageItemAriaLabel: ({ currentPage }) => `Ir a la página ${currentPage}`,
                }}
            />
        </nav>
    );
}