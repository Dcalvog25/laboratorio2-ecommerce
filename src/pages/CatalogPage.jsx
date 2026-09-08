import { useEffect, useState } from "react";
import ProductGrid from "../features/catalog/components/ProductGrid";
import Pagination from "../features/catalog/components/Pagination";
import Filters from "../features/catalog/components/Filters";

import "../styles/CatalogPage.css";

function CatalogPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="catalog-page">
      <aside className="panel-izq">
        <Filters />
      </aside>

      <main className="panel-der">
        <button
          className="mobile-filters-btn"
          onClick={() => setFiltersOpen(!filtersOpen)}
          aria-expanded={filtersOpen}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16" />
            <path d="M7 12h10" />
            <path d="M10 18h4" />
          </svg>
          Filtros
          <span className={`filter-arrow ${filtersOpen ? "open" : ""}`}>▼</span>
        </button>

        <div className={`mobile-filters ${filtersOpen ? "open" : ""}`}>
          <Filters />
        </div>

        <ProductGrid />

        <Pagination />
      </main>
    </div>
  );
}

export default CatalogPage;
