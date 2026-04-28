import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UsuarioDetalle from "./components/UsuarioDetalle";
import Usuarios from "./components/Usuarios"; // opcional

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usuario/:id" element={<UsuarioDetalle />} />
      <Route path="/usuarios" element={<Usuarios />} /> {/* reto extra */}
    </Routes>
  );
}

export default App;