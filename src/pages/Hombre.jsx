import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import banner from "../components/assets/banner_mens.png";

function Hombre() {
  const filteredData = data.filter(
    (producto) => producto.id >= 13 && producto.id <= 24
  );

  return (
    <>
      <img src={banner} style={{ width: "100%" }} alt="banner" />
      <Cards data={filteredData} titulo="Hombre" />
    </>
  );
}

export default Hombre;
