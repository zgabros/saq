import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Procedimientos from "./componentes/Procedimientos";
import Comunidad from "./componentes/Comunidad";
import Boletas from "./componentes/Boletas";
import Perfil from "./componentes/Perfil";
import { initializeApp } from "firebase/app";
import ContenedorDetalleProcedimiento from "./componentes/boletasprocedimientos/procedimientos/ContenedorDetalleProcedimiento";
import FormularioProcedimientos from "./componentes/FormularioProcedimientos/FormularioProcedimientos";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBqIq4scg5qMcb3zfd9Oz3CV3ILV0kgr3M",
    authDomain: "facturizer.firebaseapp.com",
    projectId: "facturizer",
    storageBucket: "facturizer.appspot.com",
    messagingSenderId: "658762463793",
    appId: "1:658762463793:web:17118b10fa0076c2213310",
    measurementId: "G-KV6GJTRGGL",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Procedimientos />} />
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
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
