import "./Navbar.css";
import { useState } from "react";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function NavBar() {
  const [menu, setMenu] = useState("tienda");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EnLinea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre {menu === "hombre" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer {menu === "mujer" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("niños")}>
          Niños {menu === "niños" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default NavBar;
