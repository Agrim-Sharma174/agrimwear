import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className="container px-2 sm:m-auto">
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className="font-semibold text-xl">1. Delivery Details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>

        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>
      </div>
      <div className="px-2 w-full">
        <label htmlhtmlFor="">
          <div className="relative mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              address
            </label>
            <textarea
              id=""
              cols="30"
              rows="2"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </label>
      </div>

      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>

        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="State"
                name="State"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>

        <div className="px-2 w-1/2">
          <label htmlhtmlFor="">
            <div className="relative mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                PinCode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </label>
        </div>
      </div>

      <h2 className="font-semibold text-xl">2. Review Cart Items & Pay</h2>

      <div className=" sideCart bg-yellow-100 m-2 p-6   overflow-scroll z-20">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semi-bold">Your Cart is empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className=" text-bold "> {cart[k].name}</div>
                  <div className=" flex text-semibold items-center justify-center w-1/3 mx-2 px-1 bg-black text-white text-lg">
                    {" "}
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-yellow-500"
                    />{" "}
                    <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-yellow-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
          <span className=" font-bold">Subtotal: ₹{subTotal}</span>
      </div>
      <div className="mx-4">
        <Link href={"/checkout"}>
          {" "}
          <button className="flex mr-2 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-sm">
            {" "}
            <BsFillBagCheckFill className="mt-1" /> Pay ₹ {subTotal}
          </button>{" "}
        </Link>
        </div>
    </div>
  );
};

export default Checkout;
