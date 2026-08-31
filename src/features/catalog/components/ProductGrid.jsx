import { Hits, useInstantSearch } from "react-instantsearch";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";
import noResultsImage from "../../../assets/electroTriste.png";

export default function ProductGrid() {
    const { results } = useInstantSearch();

    return (
        <div className="product-grid">
            {results?.nbHits === 0 ? (
                <>
                    <p className="no-results-found">No se encontraron productos.</p>
                    <img className="no-results-image" src={noResultsImage} alt="No results" />
                </>
            ) : (
                <Hits
                    hitComponent={(props) => (
                        <ProductCard {...props} />
                    )}
                />
            )}
        </div>
    );
}