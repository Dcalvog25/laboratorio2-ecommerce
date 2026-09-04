import "../styles/ProductInfo.css";
import { useState, useEffect } from "react";
import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";
import translations from "../../../locales/es.json";
import Rating from "./Rating";
import StoresStock from "./StoresStock";

export default function ProductInfo({ product }) {

    const tieneDescuento = product?.b2c?.discount_percentage > 0;

    return (
    <div className="pi-page">
        <h2>Detalles del Producto</h2>
        {product ? (
            <>
                <div className="pi-product-detail-grid">

                    <div className="pi-izq">
                        <img className="pi-product-image" src={product.image_url} alt={product.title} />
                    </div>

                    <div className="pi-der">

                        <p className="pi-product-mod">MOD: {product.model}</p>

                        <p className="pi-product-title">{product.title}</p>

                        <Rating rating={product.rating} />

                        <div className="pi-product-badges">
                            <span className="pi-product-warranty pi-product-badge"><ShieldCheck /> Garantía de {product.b2c.warranty_months} meses</span>
                            <span className="pi-product-estimated-delivery pi-product-badge"><Truck /> Tiempo de entrega estimado de {product.b2c.estimated_delivery_days} días</span>
                        </div>

                        <div className="pi-product-info-container-details">
                            <h3>Características del producto:</h3>
                            <ul className="pi-product-details">
                                <li><span className="pi-bold">Categoría:</span> {product.category}</li>
                                <li><span className="pi-bold">Marca:</span> {product.brand}</li>
                                <li><span className="pi-bold">Modelo:</span> {product.model}</li>
                                {Object.entries(product.facets).map(([name, value]) => (
                                    <li key={name}>
                                        <span className="pi-bold">{translations.facets[name]}:</span> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="pi-container-prices">
                            {tieneDescuento ? (
                                <>
                                    <span className="pi-product-price">₡{Number(product.b2c.sale_price).toLocaleString("en-US")}</span>
                                    <span className="pi-product-regular-price-discount">₡{Number(product.b2c.regular_price).toLocaleString("en-US")}</span>

                                    <span className="pi-product-discount-badge">¡{product.b2c.discount_percentage}% de descuento!</span>
                                </>
                            ) : (
                                <span className="pi-product-price">₡{Number(product.b2c.sale_price).toLocaleString("en-US")}</span>
                            )}
                        </div>

                        <div className="pi-shipping-container">
                            <div className="pi-shipping-quantity-container">
                                <button className="pi-shipping-button-del">-</button>
                                <span className="pi-shipping-quantity">1</span>
                                <button className="pi-shipping-button-add">+</button>
                            </div>

                            <button className="pi-add-to-cart"><ShoppingCart /> Agregar al carrito</button>
                        </div>
                    </div>

                    


                </div>

                <div className="pi-product-info-container-description">
                    <h3>Descripción del producto:</h3>
                    <p className="pi-product-description">{product.description}</p>
                </div> 

                <StoresStock branches={product.branches} />

            </>

            
        ) : (
            <p>No se encontraron detalles del producto.</p>
        )}
    </div>
    );
}