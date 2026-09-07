import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchBox } from "react-instantsearch";
import ProductGrid from "../features/catalog/components/ProductGrid";
import Pagination from "../features/catalog/components/Pagination";
import Filters from "../features/catalog/components/Filters";
import "../styles/CatalogPage.css";


function CatalogPage() {
    const location = useLocation();
    const category = location.state?.category;
    const { refine } = useSearchBox();

    useEffect(() => {
        refine(category ?? "");
    }, [category, refine]);

    return (
        <div className="catalog-page">

            <div className="panel-izq">
                <Filters />
            </div>

            <div className="panel-der">
                <ProductGrid />
                <Pagination />
            </div>

        </div>
    );
}

export default CatalogPage;