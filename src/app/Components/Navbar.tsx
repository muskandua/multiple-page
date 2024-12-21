"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>
      <div className="bg-blue-500 w-full h-[80px] flex justify-between items-center px-10 text-white">
        <div className="font-bold text-[20px] sm:text-[25px] w-full flex justify-between ">
          <Link href={"/"}>Watches World</Link>

          <button
            className="text-white sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <TiThMenu />
          </button>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"}
          absolute top-20 bg-blue-500 w-full left-0 flex justify-center md:relative md:top-0 md:flex md:w-auto md:items-center z-10 pb-2 sm:pb-0`}
        >
          <div className="flex flex-col sm:flex-row h-auto items-center gap-3 sm:gap-9 font-bold ">
            <Link
              href={"/"}
              className="cursor-pointer hover:underline underline-offset-1 transition-transform hover:scale-110"
            >
              Home
            </Link>
            <Link
              href={"/About"}
              className="cursor-pointer hover:underline underline-offset-1 transition-transform hover:scale-110"
            >
              About
            </Link>
            <Link
              href={"/Watches"}
              className="cursor-pointer hover:underline underline-offset-1 transition-transform hover:scale-110"
            >
              Watches
            </Link>
            <Link
              href={"/Contact"}
              className="cursor-pointer hover:underline underline-offset-1 transition-transform hover:scale-110"
            >
              Contact
            </Link>
            <div className="relative hidden sm:block">
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="cursor-pointer transition-transform hover:scale-110 relative"
            >
              <IoCartSharp className="w-8 h-8 " />
            </button>
            <div
              className={`${cartOpen ? "block" : "hidden"} 
            absolute top-[50px] right-0 bg-gray-100 shadow-lg rounded-xl w-[280px] h-[250px] sm:w-[320px] py-4 px-6 z-50 `}
            >
              <p className="text-black text-center">Your Cart Is Empty</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
