import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Procedimientos from "./componentes/Procedimientos";
import Comunidad from "./componentes/Comunidad";
import Boletas from "./componentes/Boletas";
import Perfil from "./componentes/Perfil";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCoKPOo0r9jjHkflNDHuSIpBfIQ6xSj7Ks",
    authDomain: "saq-app-a81e1.firebaseapp.com",
    projectId: "saq-app-a81e1",
    storageBucket: "saq-app-a81e1.appspot.com",
    messagingSenderId: "397246895422",
    appId: "1:397246895422:web:1e2b5ccdc5b8cc914c886f",
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

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
