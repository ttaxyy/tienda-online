import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function NavBar() {
    /* const[variable, function modificadorDeVariable] = useState(valorInicialDeLaVariable) String 
    La convención es que la función modificadora de la variable se le anteponga un set + nombre de variable todo junto con camelCase*/
    const[menu, setMenu] = useState("tienda")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo" /> {/* img[src=logo]  => emmet */}
            <p>Mi tienda en línea</p>
            {menu}
        </div>
        <ul className="nav-menu">
            <li onClick={()=> setMenu("tienda")}>
                Tienda
                {/* sintaxis de operador ternario: evaluador ? siCumpleLaCondición : siNoLaCumple
                    sintaxis de operador AND: evaluador && siCumpleLaCondición */}
                {menu === "tienda" ? <hr /> : <></>}    
            </li>
            <li onClick={()=> setMenu("hombre")}>
                Hombre
                {menu === "hombre" && <hr />}
            </li>
            <li onClick={()=> setMenu("mujer")}>
                Mujer
                {menu === "mujer" && <hr />}
            </li>
            <li onClick={()=> setMenu("niño")}>
                Niño
                {menu === "niño" && <hr />}
            </li>
        </ul>
        <div className="nav-login-cart"> {/* div.nav-login-cart>button */}
            <button>Login</button>
            <img src={cart_icon} alt="cart_icon" />
        </div>
    </div>
  )
}

export default NavBar