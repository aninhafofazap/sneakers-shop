import "./App.css";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-menu.svg";
import { CgProfile } from "react-icons/cg";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import close from "./assets/images/icon-close.svg";
import product from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";
import productThumb from "./assets/images/image-product-1-thumbnail.jpg";

interface IProduct {
  image: string;
  name: string;
  price: number;
}

function App() {
  const [open, setClose] = useState(false);
  const [amount, setAmount] = useState(1);
  const [cartOpen, setCartOpen] = useState(false);
  const [listCart, setListCart] = useState<IProduct[]>([]);

  const selectMenu = () => {
    setClose(!open);
  };

  const productImages = [product, product2, product3, product4];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const plusAmount = () => {
    setAmount(amount + 1);
  };

  const minusAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
    console.log("estou aqui", cartOpen);
  };

  const handleAddCart = () => {
    setListCart([
      ...listCart,
      {
        image: productThumb,
        name: "Fall Limited Edition Sneakers",
        price: 125.0,
      },
    ]);
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div className="menu-icon" onClick={selectMenu}>
            <img src={menu} alt="" />
          </div>
          <div className="logo">
            <img src={logo} alt="Logo da loja" />
          </div>
          <div className="cart" onClick={handleCartOpen}>
            <PiShoppingCartBold />
          </div>

          {!cartOpen && (
            <div className="cart-open">
              <h2 className="name-cart">Cart</h2>
              {listCart.length ? (
                listCart.map((product: any) => (
                  <div>
                    <div key={product.name} className="container-product">
                      <div className="image-product">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <div>
                        <p className="name-product">{product.name}</p>
                        <p className="price-product">
                          ${product.price.toFixed(2)} x{" "}
                          {product.price > 1 &&
                            `${amount} $${(amount * product.price).toFixed(2)}`}
                        </p>
                      </div>
                      <FaTrashAlt />
                    </div>
                    <div className="button-cart">
                      <button>
                        <p className="cart-description">Checkout</p>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="description-cart">Your cart is empty.</p>
              )}
            </div>
          )}

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
      <div>
        <h2 className="product-brand">Sneaker company</h2>
      </div>
      <div>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="price">
        <p className="price-value">
          $125.00 <span>50%</span>
        </p>
        <p className="price-discount">$250,00</p>
      </div>
      <div className="buttons">
        <button onClick={minusAmount}>
          <FaMinus />
        </button>
        <p className="button-description">{amount}</p>
        <button onClick={plusAmount}>
          <FaPlus />
        </button>
      </div>
      <div className="button-cart" onClick={handleAddCart}>
        <button>
          <PiShoppingCartBold />
        </button>
        <p className="cart-description">Add to cart</p>
      </div>
    </div>
  );
}

export default App;
