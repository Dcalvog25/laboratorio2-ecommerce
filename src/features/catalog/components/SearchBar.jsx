import { SearchBox } from "react-instantsearch";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <SearchBox placeholder="Buscar productos..." />
    </div>
  );
}