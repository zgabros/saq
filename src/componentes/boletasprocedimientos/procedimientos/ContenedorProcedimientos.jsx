import React, { useState, useEffect } from "react";
import Procedimiento from "./Procedimiento";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ContenedorProcedimientos() {
  const [procedimientos, setProcedimientos] = useState([]);
  const coleccion = "procedimientos";
  const db = getFirestore();
  const colProc = collection(db, "procedimientos");

  const colProcedimientos = query(colProc, where("user", "==", "12"));

  useEffect(() => {
    getDocs(colProc)
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
