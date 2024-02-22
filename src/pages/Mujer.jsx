import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import banner from "../components/assets/banner_women.png";

function Mujer() {
  const filteredData = data.filter(
    (producto) => producto.id >= 1 && producto.id <= 12
  );

  return (
    <>
      <img src={banner} style={{ width: "100%" }} alt="banner" />
      <Cards data={filteredData} titulo="Mujer" />
    </>
  );
}

export default Mujer;
