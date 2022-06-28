import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ItemProcedimiento({ item }) {
  const { id, Nombre, Institucion, Fecha } = item;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Id: {id}
        </Typography>
        <Typography variant="h7" component="div">
          Nombre: {Nombre}
        </Typography>
        <Typography variant="body2">Institucion: {Institucion}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar</Button>
        <Button size="small">Borrar</Button>
      </CardActions>
    </Card>
  );
}

export default ItemProcedimiento;
