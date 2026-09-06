import SearchBar from "../../catalog/components/SearchBar";
import "../styles/Header.css";
import robotLogo from "../../../assets/ElectroLogo.png";

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                
               
                <div className="header-brand">
                    <img src={robotLogo} alt="Electro-Commerce CR Logo" className="header-logo-img" />
                    <span className="header-title">Electro-Commerce CR</span>
                </div>

                
                <div className="header-search-container">
                    <SearchBar />
                </div>

                
                <div className="header-actions">
                    <div className="header-support">
                        <span className="support-icon">🎧</span>
                        <div className="support-text">
                            <span className="support-label">Soporte Técnico</span>
                            <span className="support-phone">4350-2222</span>
                        </div>
                    </div>

                    <div className="header-cart-btn">
                        <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <span className="cart-badge">0</span>
                    </div>
                </div>

            </div>
        </header>
    );
}