import React from "react";
import ContenedorBoletas from "./boletasprocedimientos/boletas/ContenedorBoletas";
import CrearBoleta from "./boletasprocedimientos/boletas/CrearBoleta";

function Boletas() {
  return (
    <>
      <div>Boletas</div>
      <ContenedorBoletas />
      <CrearBoleta />
    </>
  );
}

export default Boletas;
