import "./Navbar.css";
import { useState } from "react";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("tienda");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EnLinea</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit", height: "50%" }}
            onClick={() => setMenu("tienda")}
          >
            Tienda {menu === "tienda" ? <hr /> : <></>}
          </Link>
        </li>
        <li>
          <Link
            to="/hombre"
            style={{ textDecoration: "none", color: "inherit", height: "50%" }}
            onClick={() => setMenu("hombre")}
          >
            Hombre {menu === "hombre" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link
            to="/mujer"
            style={{ textDecoration: "none", color: "inherit", height: "50%" }}
            onClick={() => setMenu("hombre")}
          >
            Mujer {menu === "mujer" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("niños")}>
          <Link
            to="/nino"
            style={{ textDecoration: "none", color: "inherit", height: "50%" }}
            onClick={() => setMenu("hombre")}
          >
            Niños {menu === "niños" ? <hr /> : <></>}
          </Link>
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
