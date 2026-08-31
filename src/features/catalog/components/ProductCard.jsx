import "../styles/ProductCard.css";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ hit }) {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img
          src={hit.image_url}
          alt={hit.title}
          className="product-img"
        />
      </div>

      <div className="product-info">
        <h3 className="product-title">{hit.title}</h3>

        <p className="product-price">
          ₡{Number(hit.price).toLocaleString("es-CR")}
        </p>

        <button className="product-button">
          <ShoppingCart size={22} strokeWidth={2} /> Agregar al carrito
        </button>
        
      </div>
    </div>
  );
}