import "../styles/ProductCard.css";
import { useState, useEffect } from "react";

export default function ProductCard({ hit }) {
  
    const [tieneDescuento, setTieneDescuento] = useState(false);

    useEffect(() => {
        if (hit.b2c.discount_percentage > 0) {
            setTieneDescuento(true);
        }
    }, []);

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
            <h3 className="product-title">
                {hit.title}
            </h3>

            <p className="product-model">MOD: {hit.model}</p>

            <p className="product-price">
                {tieneDescuento && (
                    <>
                        <span className="product-discount">
                            ₡{Number(hit.b2c.sale_price).toLocaleString("en-US")}
                        </span>

                        <span className="product-regular-price-discount">
                            ₡{Number(hit.b2c.regular_price).toLocaleString("en-US")}
                        </span>
                    </>
                )}
                {!tieneDescuento && (
                    <span className="product-regular-price">
                        ₡{Number(hit.b2c.regular_price).toLocaleString("en-US")}
                    </span>
                )}
            </p>
        </div>
    </div>
    );
}