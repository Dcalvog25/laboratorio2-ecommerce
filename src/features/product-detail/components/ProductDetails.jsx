import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import searchClient from "../../catalog/services/algolia";

export default function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        searchClient.getObject({
                indexName: import.meta.env.VITE_ALGOLIA_INDEX_NAME,
                objectID: id
            })
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del producto:", error);
            });
    }, [id]);

    return (

        <ProductInfo product={product} />

    );
}