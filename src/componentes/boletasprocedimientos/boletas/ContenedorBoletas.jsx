import React, { useState, useEffect } from "react";
import Boleta from "./Boleta";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ContenedorBoletas() {
  const [boletas, setBoletas] = useState([]);
  const coleccion = "boletas";
  const db = getFirestore();
  const colProcedimientos = collection(db, coleccion);

  useEffect(() => {
    getDocs(colProcedimientos)
      .then((res) => {
        let data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBoletas(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);
  return (
    <article>
      <div>ContenedorBoletas</div>
      <Boleta boletas={boletas} />
    </article>
  );
}

export default ContenedorBoletas;
