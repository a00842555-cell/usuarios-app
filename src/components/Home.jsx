import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const buscar = () => {
    if (id >= 1 && id <= 10) {
    setError("");
    navigate(`/usuario/${id}`);
  } else {
    setError("El ID debe estar entre 1 y 10");
  }
};

  return (
    <div className="container">
      
      <div className="card">
        
        {/* Header */}
        <div className="header">
          <h2>Buscador de Usuarios</h2>
          <span>Inicio · Usuarios</span>
        </div>

        {/* Buscador */}
        <div className="contenido">
          <h3>Buscar usuario</h3>
          <p>Selecciona un ID del 1 al 10</p>

          <div className="buscador">
            <input
                type="number"
                
                placeholder="ID: 3"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button onClick={buscar}>Buscar →</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;