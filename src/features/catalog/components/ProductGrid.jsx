import { Hits } from "react-instantsearch";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

export default function ProductGrid() {
    return (
        <div className="product-grid">
            <Hits
                hitComponent={(props) => {
                    return <ProductCard {...props} />;
                }}
            />
        </div>
    );
}