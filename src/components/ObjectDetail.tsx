import React from "react";
import type { MuseumObject } from "../types";

interface ObjectDetailProps {
  object: MuseumObject;
  onClose: () => void;
}

const ObjectDetail: React.FC<ObjectDetailProps> = ({ object, onClose }) => {
  return (
    <div className="object-detail-overlay" onClick={onClose}>
      <div className="object-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="detail-content">
          <div className="detail-image">
            {object.primaryImage ? (
              <img
                src={object.primaryImage}
                alt={object.title || "Museum object"}
              />
            ) : (
              <div className="no-image-large">No Image Available</div>
            )}
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{object.title || "Untitled"}</h1>

            <div className="detail-section">
              <h3>Artist Information</h3>
              <p>
                <strong>Artist:</strong> {object.artistDisplayName || "Unknown"}
              </p>
              {object.artistDisplayBio && (
                <p>
                  <strong>Bio:</strong> {object.artistDisplayBio}
                </p>
              )}
              {object.artistNationality && (
                <p>
                  <strong>Nationality:</strong> {object.artistNationality}
                </p>
              )}
            </div>

            <div className="detail-section">
              <h3>Object Information</h3>
              <p>
                <strong>Date:</strong> {object.objectDate || "Unknown"}
              </p>
              <p>
                <strong>Medium:</strong> {object.medium || "Unknown"}
              </p>
              <p>
                <strong>Dimensions:</strong> {object.dimensions || "Unknown"}
              </p>
              <p>
                <strong>Department:</strong> {object.department}
              </p>
              {object.classification && (
                <p>
                  <strong>Classification:</strong> {object.classification}
                </p>
              )}
            </div>

            {object.culture && (
              <div className="detail-section">
                <h3>Cultural Context</h3>
                <p>
                  <strong>Culture:</strong> {object.culture}
                </p>
                {object.period && (
                  <p>
                    <strong>Period:</strong> {object.period}
                  </p>
                )}
                {object.dynasty && (
                  <p>
                    <strong>Dynasty:</strong> {object.dynasty}
                  </p>
                )}
              </div>
            )}

            {(object.city || object.country || object.region) && (
              <div className="detail-section">
                <h3>Geography</h3>
                {object.city && (
                  <p>
                    <strong>City:</strong> {object.city}
                  </p>
                )}
                {object.country && (
                  <p>
                    <strong>Country:</strong> {object.country}
                  </p>
                )}
                {object.region && (
                  <p>
                    <strong>Region:</strong> {object.region}
                  </p>
                )}
              </div>
            )}

            <div className="detail-section">
              <h3>Museum Information</h3>
              <p>
                <strong>Accession Number:</strong> {object.accessionNumber}
              </p>
              {object.creditLine && (
                <p>
                  <strong>Credit Line:</strong> {object.creditLine}
                </p>
              )}
              {object.isPublicDomain && (
                <p>
                  <strong>Public Domain:</strong> Yes
                </p>
              )}
            </div>

            {object.objectURL && (
              <div className="detail-section">
                <a
                  href={object.objectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="met-link"
                >
                  View on Met Museum website
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetail;
