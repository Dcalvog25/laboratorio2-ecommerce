import { RefinementList, RangeInput } from "react-instantsearch";
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
                    showMore={true}
                />
            </div>

            <div className="filter-section">
                <h3 className="filter-subtitle">Marca</h3>
                <RefinementList 
                    attribute="brand" 
                    searchable={true} 
                    searchablePlaceholder="Buscar marca..."
                    showMore={true}
                />
            </div>

            <div className="filter-section">
                <h3 className="filter-subtitle">Precio (₡)</h3>
                <RangeInput 
                    attribute="b2c.sale_price" 
                    translations={{
                        submit: 'Aplicar',
                        separator: 'a',
                    }}
                />
            </div>
        </div>
    );
}