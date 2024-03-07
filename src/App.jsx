import NavBar from "./components/NavBar/NavBar";
import Tienda from "./pages/Tienda";
import Mujer from "./pages/Mujer";
import Ninos from "./pages/Ninos";
import Hombre from "./pages/Hombre";
import Producto from "./pages/Producto";
import { Routes, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CarritoContext = createContext();

function App() {
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    axios
      .get("http://52.55.195.159:8080/api/region/region/6")
      .then((response) => {
        console.log(response);
      });
  }, []);
  return (
    <>
      <CarritoContext.Provider value={carrito}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tienda />}></Route>
          <Route path="/mujer" element={<Mujer />}></Route>
          <Route path="/nino" element={<Ninos />}></Route>
          <Route path="/hombre" element={<Hombre />}></Route>
          <Route
            path="/producto/:id"
            element={<Producto setCarrito={setCarrito} carrito={carrito} />}
          />
        </Routes>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
