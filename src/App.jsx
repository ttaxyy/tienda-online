import NavBar from "./components/NavBar/NavBar";
import Tienda from "./pages/Tienda";
import Mujer from "./pages/Mujer";
import Ninos from "./pages/Ninos";
import Hombre from "./pages/Hombre";
import Producto from "./pages/Producto";
import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const CarritoContext = createContext();

function App() {
  const [carrito, setCarrito] = useState([]);

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
