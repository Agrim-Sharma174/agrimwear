import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center -my-12 shadow-md sticky top-0 bg-white z-10">
      <div className="logo">
        <Link className="cursor-pointer" href={"/"}>
          <img
            className="relative top-10 md:top-5"
            src="/AgrimWear.png"
            alt="agrimwear.com logo"
            width={160}
            height={40}
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex relative -top-15 md:top-5 items-center space-x-4 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>

      <div
        onClick={toggleCart}
        className="cart absolute right-0 top-14 md:top-10 mx-5 cursor-pointer"
      >
        <AiOutlineShoppingCart className="md:text-3xl text-2xl" />
      </div>

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-yellow-100 py-10 px-8 transform transition-transform ${Object.keys(cart.length !== 0? 'translate-x-0' : 'translate-x-full')}translate-x-0 overflow-scroll z-20`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl text-yellow-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
        {Object.keys(cart).length == 0 && 
        
        <div className="my-4 font-semi-bold">Your Cart is empty!</div> }
          { Object.keys(cart).map((k) => { return <li key={k}>
            <div className="item flex my-5">
              <div className="w-2/3 text-bold "> {cart[k].name}</div>
              <div className=" flex text-semibold items-center justify-center w-1/3 mx-2 px-1 bg-black text-white text-lg">
                {" "}
                <AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className="cursor-pointer text-yellow-500" />{" "}
                <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
                <AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}}  className="cursor-pointer text-yellow-500" />
              </div>
            </div>
          </li>})}
          
        </ol>

        <div className=" my-2 font-bold">Subtotal: ₹{subTotal}</div>

        <div className="flex">
          <Link href={'/checkout'}> <button className="flex mr-2 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-sm">
            {" "}
            <BsFillBagCheckFill className="mt-1" /> Checkout!
          </button> </Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-yellow-500 border-0 py-2 px-2 focus:outline-none hover:bg-yellow-600 rounded text-sm">
            Clear Cart!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
