import "./App.css";
import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import cart from "./assets/images/icon-cart.svg";
import { CgProfile } from "react-icons/cg";
import close from "./assets/images/icon-close.svg";

function App() {
  // Usei o useState para criar um estado chamado "open", com o valor inicial de "false"
  // depois criei o setClose pra poder atualizar o valor do estado
  const [open, setClose] = useState(false);

  const selectMenu = () => {
    // criei a funçao pra poder chamar quando o icone do menu for clicado.
    // o setClose e pra quando o valor for clicado inverter o valor de true pra false ou false pra true
    setClose(!open);
    console.log("estou aqui");
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="menu-icon" onClick={selectMenu}>
          <img src={menu} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="Logo da loja" />
        </div>
        <div className="cart">
          <img src={cart} alt="Carrinho da loja" />
        </div>
        <div className="profile">
          <CgProfile />
        </div>
      </nav>
      {open && (
        <>
          <div
            className={`${open && "active-background"} dark-background`}
          ></div>
          <div className={`${open && "menu-active"} menu-options`}>
            <img
              src={close}
              alt=""
              className="icon-close"
              onClick={selectMenu}
            />
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
