import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function ItemProcedimiento({ item }) {
  const { id, Nombre, Institucion, user } = item;
  return (
    <Card sx={{ minWidth: 275 }} style={{ margin: "8px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Id: {id}
        </Typography>
        <Typography variant="h7" component="div">
          Nombre: {Nombre}
        </Typography>
        <Typography variant="h7" component="div">
          User: {user}
        </Typography>
        <Typography variant="body2">Institucion: {Institucion}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/Procedimientos/${id}`}>
          Detalles
        </Button>
        <Button size="small">Agregar a boleta</Button>
        <Button size="small">Borrar</Button>
      </CardActions>
    </Card>
  );
}

export default ItemProcedimiento;
