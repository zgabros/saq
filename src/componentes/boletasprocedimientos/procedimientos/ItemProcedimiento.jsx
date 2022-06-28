import React from "react";

function ItemProcedimiento({ item }) {
  const { id, Nombre, Institucion, Fecha } = item;
  return (
    <article style={{ marginBottom: "15px" }}>
      <div>Id: {id}</div>
      <div>Nombre: {Nombre}</div>
      <div>Institucion: {Institucion}</div>
    </article>
  );
}

export default ItemProcedimiento;
