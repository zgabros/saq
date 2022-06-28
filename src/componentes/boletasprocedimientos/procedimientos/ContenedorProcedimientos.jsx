import React, { useState, useEffect } from "react";
import Procedimiento from "./Procedimiento";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ContenedorProcedimientos() {
  const [procedimientos, setProcedimientos] = useState([]);
  const coleccion = "procedimientos";
  const db = getFirestore();
  const colProcedimientos = collection(db, coleccion);

  useEffect(() => {
    getDocs(colProcedimientos)
      .then((res) => {
        let data = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProcedimientos(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, []);

  return <Procedimiento procedimientos={procedimientos} />;
}

export default ContenedorProcedimientos;
