import React from "react";
import ContenedorProcedimientos from "./boletasprocedimientos/procedimientos/ContenedorProcedimientos";
import CrearProcedimiento from "./boletasprocedimientos/procedimientos/CrearProcedimiento";

function Procedimientos() {
  return (
    <article>
      <div>Procedimientos</div>
      <ContenedorProcedimientos />
      <CrearProcedimiento />
    </article>
  );
}

export default Procedimientos;
