import "../styles/StoresStock.css";

export default function StoresStock({ branches }) {

    const colorStock = (stock) => {
        if (stock > 10) {
            return "green";
        } else if (stock > 5) {
            return "orange";
        }
        else {
            return "red";
        }
    };

    return (
        <div className="pi-product-stock-branches">
            <h3>Disponibilidad en sucursales:</h3>
            <ul className="pi-branch-list">
                {branches.map((branch) => (
                    <li key={branch.id} className="pi-branch-item">
                        <span className="pi-branch-title">{branch.name}</span>
                        <span className={`stock-color-${colorStock(branch.stock_quantity)}`}>{branch.stock_quantity} disponible{(branch.stock_quantity > 1 ? "s" : "")}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}