import Cards from "../components/Cards/Cards";
import data from "../components/assets/all_product.js";
import banner from "../components/assets/banner_kids.png";

function Ninos() {
  const filteredData = data.filter(
    (producto) => producto.id >= 25 && producto.id <= 36
  );

  return (
    <>
      <img src={banner} style={{ width: "100%" }} alt="banner" />
      <Cards data={filteredData} titulo="Niños" />
    </>
  );
}

export default Ninos;
