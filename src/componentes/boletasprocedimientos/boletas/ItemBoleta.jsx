import React from "react";

function ItemBoleta({ item }) {
  const { MES } = item;

  return <div>Fecha: {MES}</div>;
}

export default ItemBoleta;
