import React from "react";
import ContenedorBoletas from "./boletasprocedimientos/ContenedorBoletas";
import CrearBoleta from "./boletasprocedimientos/CrearBoleta";

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
