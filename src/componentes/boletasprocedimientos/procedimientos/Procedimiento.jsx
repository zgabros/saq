import React from "react";
import ItemProcedimiento from "./ItemProcedimiento";

function Procedimiento({ procedimientos }) {
  return (
    <>
      {procedimientos &&
        procedimientos.map((item) => (
          <ItemProcedimiento key={item.id} item={item} />
        ))}
    </>
  );
}

export default Procedimiento;
