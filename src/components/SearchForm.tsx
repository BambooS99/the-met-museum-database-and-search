import React, { useState } from "react";
import { useGetDepartmentsQuery } from "../services/metMuseumApi";
import type { Department } from "../types";

interface SearchFormProps {
  onSearch: (searchParams: SearchParams) => void;
}

export interface SearchParams {
  q?: string;
  departmentId?: number;
  isHighlight?: boolean;
  hasImages?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<number | "">("");
  const [highlightsOnly, setHighlightsOnly] = useState(false);
  const [withImages, setWithImages] = useState(true);

  const { data: departmentsData } = useGetDepartmentsQuery();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams: SearchParams = {};

    if (query.trim()) searchParams.q = query.trim();
    if (selectedDepartment)
      searchParams.departmentId = Number(selectedDepartment);
    if (highlightsOnly) searchParams.isHighlight = true;
    if (withImages) searchParams.hasImages = true;

    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the Met collection..."
          className="search-input"
        />
      </div>

      <div className="form-group">
        <select
          value={selectedDepartment}
          onChange={(e) =>
            setSelectedDepartment(
              e.target.value === "" ? "" : Number(e.target.value)
            )
          }
          className="department-select"
        >
          <option value="">All Departments</option>
          {departmentsData?.departments.map((dept: Department) => (
            <option key={dept.departmentId} value={dept.departmentId}>
              {dept.displayName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group checkboxes">
        <label>
          <input
            type="checkbox"
            checked={highlightsOnly}
            onChange={(e) => setHighlightsOnly(e.target.checked)}
          />
          Highlights only
        </label>

        <label>
          <input
            type="checkbox"
            checked={withImages}
            onChange={(e) => setWithImages(e.target.checked)}
          />
          With images
        </label>
      </div>

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
