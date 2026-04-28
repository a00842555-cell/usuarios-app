import { useEffect, useState } from "react";

<div className="usuario"></div>
function Usuarios(){
    const [usuarios, setUsuarios] = useState([]);   

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsuarios(data));

    
    }, []);

    return(
        <div>
            <h2>Lista de Usuarios</h2>
            {usuarios.map(usuario => (
                <div key={usuario.id}>
                    <p>Nombre: {usuario.name}</p>
                    <p>Email: {usuario.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Usuarios;