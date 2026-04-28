import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css"; // usamos mismo estilo

function UsuarioDetalle() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUsuario(data));
  }, [id]);

  if (!usuario) return <p>Cargando...</p>;

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <h2>Buscador de Usuarios</h2>
          <span>Inicio · Usuarios</span>
        </div>

        <div className="contenido">

          <p className="ruta">localhost:5173/usuario/{id}</p>

          <div className="user">
            <div className="avatar">CL</div>
            <div>
              <h3>{usuario.name}</h3>
              <p>ID #{usuario.id}</p>
            </div>
          </div>

          <p><strong>Email</strong> <span>{usuario.email}</span></p>
          <p><strong>Ciudad</strong> {usuario.address.city}</p>
          <p><strong>Empresa</strong> {usuario.company.name}</p>

          <Link to="/" className="volver">← Volver</Link>
        </div>

      </div>
    </div>
  );
}

export default UsuarioDetalle;