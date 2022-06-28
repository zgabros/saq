import React from "react";
import ItemProcedimiento from "./ItemProcedimiento";

function Procedimiento({ procedimientos }) {
  return (
    <article className="contenedorTarjetas">
      {procedimientos &&
        procedimientos.map((item) => (
          <ItemProcedimiento key={item.id} item={item} />
        ))}
    </article>
  );
}

export default Procedimiento;
