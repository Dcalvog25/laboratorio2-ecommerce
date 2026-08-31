import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import CatalogPage from './pages/CatalogPage'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function App() {

  return (
    <HashRouter>
      <nav>
        <ul>
            <li>
                <Link to="/search">Inicio</Link>
            </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<CatalogPage />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </HashRouter>
  )
}

export default App
