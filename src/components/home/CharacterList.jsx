import { useEffect, useState } from "react";
import { getCharacters } from "../../services/api";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Personajes</h2>

      <div className="row justify-content-center g-3">
        {characters.map((char) => (
          <div key={char.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 shadow-sm text-center"
              style={{
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Imagen sin deformación */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  background: "#f9f9f9",
                }}
              >
                <img
                  src={char.image}
                  alt={char.name}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="card-body p-2">
                <h6 className="card-title mb-1">{char.name}</h6>
                <small className="text-muted d-block">
                  <strong>Raza:</strong> {char.race}
                </small>
                <small className="text-muted d-block">
                  <strong>Afiliación:</strong>{" "}
                  {char.affiliation || "Desconocida"}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
