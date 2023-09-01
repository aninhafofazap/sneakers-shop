import "./App.css";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import cart from "./assets/images/icon-cart.svg";
import { CgProfile } from "react-icons/cg";
import close from "./assets/images/icon-close.svg";
import product from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";

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

  const productImages = [product, product2, product3, product4]; // Lista de imagens do produto

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* navbar */}
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
                <li className="list-item">Collections</li>
                <li className="list-item">Men</li>
                <li className="list-item">Women</li>
                <li className="list-item">About</li>
                <li className="list-item">Contact</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="shopp">
        <Slider {...settings}>
          {productImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Produto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
