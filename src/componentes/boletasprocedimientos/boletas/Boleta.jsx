import React from "react";
import ItemBoleta from "./ItemBoleta";

function Boleta({ boletas }) {
  return (
    <article className="contenedorTarjetas">
      {boletas &&
        boletas.map((item) => <ItemBoleta key={item.id} item={item} />)}
    </article>
  );
}

export default Boleta;
