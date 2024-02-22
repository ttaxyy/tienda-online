import NavBar from "./components/NavBar/NavBar";
import Tienda from "./pages/Tienda";
import Mujer from "./pages/Mujer";
import Ninos from "./pages/Ninos";
import Hombre from "./pages/Hombre";
import Producto from "./pages/Producto";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/nino" element={<Ninos />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/producto" element={<Producto />}></Route>
      </Routes>
    </>
  );
}

export default App;
