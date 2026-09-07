import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { InstantSearch } from "react-instantsearch";
import Home from './Home'
import CatalogPage from './pages/CatalogPage'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import searchClient from './features/catalog/services/algolia'
import './App.css'

function App() {

  return (
    <HashRouter>
      <InstantSearch
        searchClient={searchClient}
        indexName={import.meta.env.VITE_ALGOLIA_INDEX_NAME}
      >
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<CatalogPage />} />
              <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </InstantSearch>
    </HashRouter>
  )
}

export default App
