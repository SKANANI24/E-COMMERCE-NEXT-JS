import React from "react";
import { BsFillBagCheckFill } from "react-icons/bs";
import {GiMoneyStack} from 'react-icons/gi'


import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
const Checkout = ({ cart, addToCart, removeFromCart,subTotal }) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container max-md:py-36  px-11 py-24 mx-auto">
          <div className="flex-col justify-center ">
            <div class="flex justify-center items-center text-center w-full mb-10">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Checkout{" "}
              </h1>
              <span className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mx-3">
                <BsFillBagCheckFill />
              </span>
            </div>

            <p class="lg:w-2/3  mx-auto leading-relaxed font-semibold text-xl">
              1 . Delivery Details
            </p>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="address" class="leading-7 text-sm text-gray-600">
                  Address
                </label>
                <textarea
                  type="text"
                  id="address"
                  name="address"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="pincode" class="leading-7 text-sm text-gray-600">
                  Zip - Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative flex-grow w-full">
                <label for="phone" class="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="city" class="leading-7 text-sm text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative flex-grow w-full">
                <label for="state" class="leading-7 text-sm text-gray-600">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 mt-3 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <p class="lg:w-2/3  mx-auto leading-relaxed font-semibold my-3 text-xl">
              2 . Review Cart & Pay
            </p>
            <div className="rounded-lg  flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end bg-gray-100  ">

              <div className="flex-col w-full p-6">
              <h2 class="font-medium text-2xl title-font  text-gray-900 ">Cart items</h2>
            <div class="w-16 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <ul>
                  {Object.keys(cart).map((key) => {
                    return (
                      <li
                        key={key}
                        className="lining-nums  border-x-2 bg-slate-50 my-2 rounded-md shadow-lg p-3 "
                      >
                        <div className="flex justify-between">
                          <p>{cart[key]?.title}  {`(${cart[key].size}/${cart[key].variant})`}</p>
                          <div className="flex justify-center items-center text-lg ">
                            <AiFillMinusCircle
                              className="cursor-pointer"
                              onClick={() => {
                                return removeFromCart(key);
                              }}
                            />
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
                <div className="p-2 w-full justify-between flex">
                <p className="flex mx-auto  border-0 py-2 px-8 focus:outline-none  text-lg">
                      To Pay : ₹ {subTotal}.00
                    </p>
                    <button className="flex  items-center mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                      Pay Now <GiMoneyStack className="mx-2 "/>
                    </button>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
