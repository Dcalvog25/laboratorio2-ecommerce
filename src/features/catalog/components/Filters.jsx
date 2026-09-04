import { RefinementList, RangeInput } from "react-instantsearch";
import PriceSlider from "./PriceSlider"; 
import "../styles/Filters.css";

export default function Filters() {
    return (
        <div className="filters-container">
            <h2 className="filters-title">Filtros</h2>

            <div className="filter-section">
                <h3 className="filter-subtitle">Categoría</h3>
                <RefinementList 
                    attribute="category" 
                    searchable={true} 
                    searchablePlaceholder="Buscar categoría..."
                    limit={50} /* Carga hasta 50 categorías de golpe para poder scrollear */
                />
            </div>

            <div className="filter-section">
                <h3 className="filter-subtitle">Marca</h3>
                <RefinementList 
                    attribute="brand" 
                    searchable={true} 
                    searchablePlaceholder="Buscar marca..."
                    limit={50} /* Carga hasta 50 marcas */
                />
            </div>

            <div className="filter-section">
                <h3 className="filter-subtitle">Precio (₡)</h3>
                {/* double slider conectado a Algolia */}
                <PriceSlider attribute="b2c.sale_price" />
            </div>

        </div>
    );
}