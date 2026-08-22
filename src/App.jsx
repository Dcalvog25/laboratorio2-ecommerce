import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import './App.css'

function App() {

  return (
    <HashRouter>
      <nav>
        <ul>
            <li>
                <Link to="/home">Inicio</Link>
            </li>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App
