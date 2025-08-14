import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import SearchForm, { type SearchParams } from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import ObjectDetail from "./components/ObjectDetail";
import { useSearchObjectsQuery } from "./services/metMuseumApi";
import type { MuseumObject } from "./types";
import "./App.css";

const AppContent: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const [selectedObject, setSelectedObject] = useState<MuseumObject | null>(
    null
  );
  const [hasSearched, setHasSearched] = useState(false);

  const {
    data: searchResults,
    isLoading,
    error,
  } = useSearchObjectsQuery(searchParams, {
    skip: !hasSearched,
  });

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setHasSearched(true);
    setSelectedObject(null);
  };

  const handleObjectSelect = (object: MuseumObject) => {
    setSelectedObject(object);
  };

  const handleCloseDetail = () => {
    setSelectedObject(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Metropolitan Museum of Art Collection</h1>
        <p>Explore the Met's vast collection of art and artifacts</p>
      </header>

      <main className="app-main">
        <SearchForm onSearch={handleSearch} />

        {error && (
          <div className="error-message">
            Error searching the collection. Please try again.
          </div>
        )}

        {hasSearched && searchResults && (
          <SearchResults
            objectIds={searchResults.objectIDs || []}
            onObjectSelect={handleObjectSelect}
            loading={isLoading}
          />
        )}

        {!hasSearched && (
          <div className="welcome-message">
            <h2>Welcome to the Met Collection Explorer</h2>
            <p>
              Use the search form above to explore over 400,000 artworks from
              the Metropolitan Museum of Art's collection.
            </p>
          </div>
        )}
      </main>

      {selectedObject && (
        <ObjectDetail object={selectedObject} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
