import { InstantSearch } from "react-instantsearch";
import SearchBar from "../features/catalog/components/SearchBar";
import ProductGrid from "../features/catalog/components/ProductGrid";
import Filters from "../features/catalog/components/filters";
import searchClient from "../features/catalog/services/algolia";
import "./CatalogPage.css";

function CatalogPage() {
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
        >
            <div className="catalog-page">

                <div className="panel-izq">
                    <Filters />
                </div>

                <div className="panel-der">
                    <h1>Catálogo de Productos</h1>

                    <SearchBar />

                    <ProductGrid />
                </div>

            </div>
        </InstantSearch>
    );
}

export default CatalogPage;