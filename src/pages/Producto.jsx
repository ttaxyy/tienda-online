import { Button, Container, Grid, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PesosChilenos from "../components/clp";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../components/assets/all_product";

function Producto({ setCarrito, carrito }) {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  const generarPedido = (producto) => {
    const [primera, segunda, tercera] = producto.nombre.split(" ", 3);
    const cod = `${primera[0]}-${segunda[0]}-${tercera[0]}-id-${producto.id}`;

    producto["codigo"] = cod;
    producto["cantidad"] = 1;
    const nuevoArray = [...carrito, producto];
    setCarrito(nuevoArray);
  };

  useEffect(() => {
    setProducto(data.find((producto) => `${producto.id}` === id));
  }, [id]);

  return (
    <>
      {producto && (
        <Container>
          <Grid container spacing={2} sx={{ mt: "40px" }}>
            <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
              <img src={producto.imagen} style={{ width: "100%" }}></img>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ padding: "15px" }}>
              <Typography variant="h5">
                <b>Detalle</b> : {producto.nombre}
              </Typography>
              <Typography variant="h5" sx={{ mt: "30px" }}>
                <b>Categoría :</b> {producto.categoria}
              </Typography>

              <Typography
                variant="h6"
                color="textSecondary"
                sx={{ mt: "30px" }}
              >
                <b>Precio: </b>
                {PesosChilenos(producto.precio_anterior)}
              </Typography>
              <Typography color="textSecondary" variant="h6">
                <b>Descuento: </b>
                {PesosChilenos(
                  producto.nuevo_precio - producto.precio_anterior
                )}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "right", w: "100%" }}>
                <b>Total: {PesosChilenos(producto.nuevo_precio)}</b>
              </Typography>
              <div style={{ textAlign: "right" }}>
                <Button
                  variant="outlined"
                  endIcon={<ShoppingCartCheckoutIcon />}
                  color="error"
                  onClick={() => generarPedido(producto)}
                >
                  Agregar al carro
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Producto;
