import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {RiAccountPinCircleFill ,RiShoppingCartFill} from 'react-icons/ri'

const Navbar = ({ cart, addToCart, removeFromCart, clearCart }) => {
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  return (
    <div>
      <div className="nav flex shadow-md  flex-col items-center fixed z-10 bg-purple-100 w-full md:flex-row md:w-full">
        <div className="logo nav-left md:w-1/4">
          <Link href={"/"}>
            {" "}
            <Image
              width={150}
              alt="logo"
              className="w-72 h-16"
              height={10}
              src={"/logo.png"}
            />
          </Link>
        </div>
        <div className="w-3/4   text-lg nav-center flex font-bold">
          <Link href={"/tshirts"}>
            <li className="md:mx-4 mx-1 md:text-lg text-sm">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="text-sm mx-1 md:mx-4 md:text-lg">hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="md:mx-4 mx-1 text-sm md:text-lg">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="md:mx-4 mx-1 text-sm md:text-lg">Mugs</li>
          </Link>
        </div>
        <div className=" nav-right  flex right-0">
        <Link href={'/login'}><RiAccountPinCircleFill className="cursor-pointer text-2xl mx-2"/></Link>
          <RiShoppingCartFill onClick={toggleCart} className="cursor-pointer text-2xl mx-2" />
        </div>
      </div>

      {/* ///// sidebar ///// */}
      <div
        ref={ref}
        className=" sideBar fixed overflow-y-auto  z-20 md:w-[23%] h-full right-0 top-0 p-3 bg-purple-300 transition-transform translate-x-full transform "
      >
        <span
          className="right-4 top-1 absolute text-2xl cursor-pointer"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </span>
        <div className="text-center  text-2xl font-semibold my-3">
          <h2>Your Cart</h2>
        </div>
        <hr />

        <div className="flex-col">
          <ul>
            {Object.keys(cart).map((key) => {
              return (
                <li
                  key={key}
                  className="lining-nums  border-x-2 bg-slate-50 my-2 rounded-md shadow-lg p-3 "
                >
                  <div className="flex justify-between">
                    <p>{cart[key]?.title}</p>
                    <div className="flex justify-center items-center text-lg ">
                      <AiFillMinusCircle className="cursor-pointer" onClick={()=>{return removeFromCart(key)}}/>
                      <span className="mx-2">{cart[key].qty}</span>
                      <AiFillPlusCircle
                        className="cursor-pointer"
                        onClick={() => {
                          addToCart(
                            key,
                            cart[key].qty,
                            cart[key].price,
                            cart[key].title,
                            cart[key].size,
                            cart[key].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="p-2 w-full flex">
            <Link href={"/checkout"}>
              <button
                onClick={toggleCart}
                className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Checkout
              </button>
            </Link>
            <button
              className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
              onClick={clearCart}
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
