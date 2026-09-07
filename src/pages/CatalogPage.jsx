import { InstantSearch } from "react-instantsearch";
import { useLocation } from "react-router-dom";
import SearchBar from "../features/catalog/components/SearchBar";
import ProductGrid from "../features/catalog/components/ProductGrid";
import Pagination from "../features/catalog/components/Pagination";
import Filters from "../features/catalog/components/Filters";
import searchClient from "../features/catalog/services/algolia";
import "../styles/CatalogPage.css";
import Footer from "../features/catalog/components/Footer";
import Header from "../features/catalog/components/Header";


function CatalogPage() {
    const location = useLocation();
    const category = location.state?.category;
    const query = category ? category : "";

    return (
        <InstantSearch
            searchClient={searchClient}
            indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
            initialUiState={{
                [import.meta.env.VITE_ALGOLIA_INDEX_NAME]: {
                    query: query
                }
            }}
        >   
            <Header />
            <div className="catalog-page">

                <div className="panel-izq">
                    <Filters />
                </div>

                <div className="panel-der">
                    <h1>Catálogo de Productos</h1>

                    <SearchBar />

                    <ProductGrid />
                    <Pagination />
                </div>

            </div>

            <Footer />
        </InstantSearch>
    );
}

export default CatalogPage;