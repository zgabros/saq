import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Procedimientos from "./componentes/Procedimientos";
import Comunidad from "./componentes/Comunidad";
import Boletas from "./componentes/Boletas";
import Perfil from "./componentes/Perfil";
import ContenedorDetalleProcedimiento from "./componentes/boletasprocedimientos/procedimientos/ContenedorDetalleProcedimiento";
import FormularioProcedimientos from "./componentes/FormularioProcedimientos/FormularioProcedimientos";
import FurmularioUsuarios from "./componentes/FormularioProcedimientos/FurmularioUsuarios";
import AppContext from "./componentes/context/ProcedimientoContext";
import SingIn from "./componentes/SingIn";

function App() {
  return (
    <AppContext>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/Procedimientos" element={<Procedimientos />} />
            <Route
              path="/Procedimientos/:id"
              element={<ContenedorDetalleProcedimiento />}
            />
            <Route path="/Boletas" element={<Boletas />} />
            <Route path="/Boletas/:id" element={<Boletas />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Comunidad" element={<Comunidad />} />
            <Route
              path="/FormProcedimiento"
              element={<FormularioProcedimientos />}
            />
            <Route path="/FormUsuario" element={<FurmularioUsuarios />} />
            <Route path="/*" element={<div>Error</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext>
  );
}

export default App;
