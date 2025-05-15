import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";
import Categorias from "../pages/Categorias";
import Sobre from "../pages/Sobre";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}
