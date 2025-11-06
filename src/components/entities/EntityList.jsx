import { useEffect, useState } from "react";
import { getEntities } from "../../services/api";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    getEntities().then(setEntities);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Planetas</h2>
      <div className="row justify-content-center">
        {entities.map((e) => (
          <div key={e.id} className="col-6 col-md-3 col-lg-2 mb-4">
            <div className="card h-100 text-center shadow-sm p-2">
              <h6 className="card-title mt-2">{e.name}</h6>
              <p className="text-muted small mt-1">
                {e.description ? e.description.slice(0, 40) + "..." : "Sin descripción"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntityList;
