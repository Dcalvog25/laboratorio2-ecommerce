import { SearchBox } from "react-instantsearch";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <SearchBox className="search-input" placeholder="Buscar productos..." />
    </div>
  );
}