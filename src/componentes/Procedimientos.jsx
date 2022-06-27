import React from "react";
import ContenedorProcedimientos from "./boletasprocedimientos/ContenedorProcedimientos";
import CrearProcedimiento from "./boletasprocedimientos/CrearProcedimiento";

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
