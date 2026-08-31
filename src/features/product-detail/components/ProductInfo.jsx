import "../styles/ProductInfo.css";

export default function ProductInfo({ product }) {
  return (
    <div>
      <h2>Detalles del Producto</h2>
        {product ? (
            <div className="pi-product-detail-grid">

                <div className="pi-product-image-container">
                    <img className="pi-product-image" src={product.image_url} alt={product.title} />
                </div>

                <div className="pi-product-info-detail">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>


            </div>
        ) : (
            <p>No se encontraron detalles del producto.</p>
        )}
    </div>
  );
}