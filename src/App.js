import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Procedimientos from "./componentes/Procedimientos";
import Comunidad from "./componentes/Comunidad";
import Boletas from "./componentes/Boletas";
import Perfil from "./componentes/Perfil";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Procedimientos />} />
          <Route path="/Procedimientos" element={<Procedimientos />} />
          <Route path="/Boletas" element={<Boletas />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Comunidad" element={<Comunidad />} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
