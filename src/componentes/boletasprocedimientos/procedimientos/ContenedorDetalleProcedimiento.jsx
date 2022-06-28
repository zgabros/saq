import React, { useState, useEffect } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ContenedorDetalleProcedimiento() {
  const { id } = useParams();

  const colection = "procedimientos";
  const [procedimiento, setProcedimiento] = useState([]);
  const db = getFirestore();

  const docItem = doc(db, colection, id);

  useEffect(() => {
    getDoc(docItem)
      .then((res) => {
        if (res.exists()) {
          setProcedimiento({ ...res.data(), id: res.id });
        } else {
          console.log("hubo un error");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [id]);

  return (
    <Card sx={{ minWidth: 275 }} style={{ margin: "8px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Id: {procedimiento.id}
        </Typography>
        <Typography variant="h7" component="div">
          Nombre: {procedimiento.Nombre}
        </Typography>
        <Typography variant="body2">{procedimiento.Institucion}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar a boleta</Button>
        <Button size="small">Borrar</Button>
      </CardActions>
    </Card>
  );
}

export default ContenedorDetalleProcedimiento;
