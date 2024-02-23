import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import cart_icon from "../assets/cart_icon.png";
import { CarritoContext } from "../../App";
import { useState, useContext } from "react";
import CarritoDeCompra from "../Cards/CarritoDeCompra";

export default function RightDrawer({ children }) {
  const [state, setState] = useState({
    right: false,
  });
  const carrito = useContext(CarritoContext);

  const toggleDrawer = (open) => () => {
    setState({ ["right"]: open });
  };

  const length = () => {
    return carrito.length;
  };

  function obtenerColeccion() {
    return carrito.reduce((accumulator, currentProduct) => {
      const existingProduct = accumulator.find(
        (p) => p.id === currentProduct.id
      );

      if (existingProduct) {
        // Si el producto ya existe, suma la cantidad
        existingProduct.cantidad += currentProduct.cantidad;
      } else {
        // Si el producto no existe, agrégalo al array
        accumulator.push({ ...currentProduct });
      }

      return accumulator;
    }, []);
  }

  const list = () => (
    <Box
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <CarritoDeCompra data={obtenerColeccion()} titulo="Carrito de compra" />
    </Box>
  );

  return (
    <>
      <div
        style={{ marginTop: "auto", marginBottom: "auto", cursor: "pointer" }}
        onClick={toggleDrawer(true)}
      >
        <div className="nav-login-cart">
          <img src={cart_icon} alt="carrito" />
          <div className="nav-cart-count">{length()}</div>
        </div>
      </div>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer(false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
