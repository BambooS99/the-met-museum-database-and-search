import React from "react";
import { useGetObjectQuery } from "../services/metMuseumApi";
import type { MuseumObject } from "../types";

interface ObjectCardProps {
  objectId: number;
  onSelect: (object: MuseumObject) => void;
}

const ObjectCard: React.FC<ObjectCardProps> = ({ objectId, onSelect }) => {
  const { data: object, isLoading, error } = useGetObjectQuery(objectId);

  if (isLoading) return <div className="object-card loading">Loading...</div>;
  if (error)
    return <div className="object-card error">Error loading object</div>;
  if (!object) return null;

  return (
    <div className="object-card" onClick={() => onSelect(object)}>
      <div className="image-container">
        {object.primaryImageSmall ? (
          <img
            src={object.primaryImageSmall}
            alt={object.title || "Museum object"}
            loading="lazy"
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <div className="object-info">
        <h3 className="object-title">{object.title || "Untitled"}</h3>
        <p className="object-artist">
          {object.artistDisplayName || "Unknown Artist"}
        </p>
        <p className="object-date">{object.objectDate || "Date unknown"}</p>
        <p className="object-department">{object.department}</p>
      </div>
    </div>
  );
};

interface SearchResultsProps {
  objectIds: number[];
  onObjectSelect: (object: MuseumObject) => void;
  loading?: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  objectIds,
  onObjectSelect,
  loading = false,
}) => {
  if (loading) {
    return <div className="search-results loading">Searching...</div>;
  }

  if (objectIds.length === 0) {
    return <div className="search-results empty">No results found</div>;
  }

  // Limit results to first 20 for better performance
  const displayIds = objectIds.slice(0, 20);

  return (
    <div className="search-results">
      <p className="results-count">
        Showing {displayIds.length} of {objectIds.length} results
      </p>
      <div className="results-grid">
        {displayIds.map((objectId) => (
          <ObjectCard
            key={objectId}
            objectId={objectId}
            onSelect={onObjectSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
