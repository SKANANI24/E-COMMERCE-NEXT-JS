import { useEffect, useState } from "react";
import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem("cart");
    }
    //eslint-disable-next-line
  }, []);

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + 1;

    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let subT = 0;
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subT += cart[keys[i]]["price"] * cart[keys[i]]["qty"];
    }
    setSubTotal(subT);
  };

  const removeFromCart = (itemCode) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - 1;
      console.log(newCart[itemCode])
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]; 
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <>
      <Navbar
        subTotal={subTotal}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Component
        {...pageProps}
        cart={cart}
        subTotal={subTotal}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
      <Footer />
    </>
  );
}

export default MyApp;
