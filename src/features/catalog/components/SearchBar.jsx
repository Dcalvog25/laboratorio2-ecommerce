import { Autocomplete } from "react-instantsearch";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <Autocomplete
        placeholder="Buscar productos..."
        indices={[
          {
            indexName: import.meta.env.VITE_ALGOLIA_INDEX_NAME,
            itemComponent: ({ item }) => (
              <div>
                <h3>{item?.title}</h3>
                <p>{item?.model}</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}