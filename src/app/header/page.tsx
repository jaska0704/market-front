"use client";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InputDemo } from "./components/input";
import { SelectDemo } from "./components/select";
import { DrawerDemo } from "./components/drawer";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Header = () => {

  return (
    <div>
      <div className="text-base text-center px-2 hidden sm:block md:flex md:justify-between md:items-center">
        <p className="my-4">Welcome to Worldwide Electronics Store</p>
        <ul className="flex justify-between my-3 md:gap-5">
          <li className="lg:hidden">
            <Link href="https://demo.lion-themes.net/amera/my-account/">
              My account
            </Link>
          </li>
          <li>
            <Link href="https://demo.lion-themes.net/amera/my-account/">
              Checkount
            </Link>
          </li>
          <li>
            <Link href="https://demo.lion-themes.net/amera/my-account/">
              Shop
            </Link>
          </li>
          <li>
            <Link href="https://demo.lion-themes.net/amera/my-account/">
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-y-2 ">
        <div className="container py-6 px-3 flex justify-between items-center">
          <img
            src="./logo.png"
            alt="logo"
            className="w-28 h-8 lg:w-40 lg:h-9"
          />
          <div className="hidden xl:flex items-center gap-3">
            <BiSupport size={40} />
            <div>
              <p className="">
                Hotline Free:
                <br />
                <strong>06-900-6789-00</strong>
              </p>
            </div>
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center border-2 border-orange-500 rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full pl-2 ">
            <SelectDemo />
            <p className="text-[18px]">|</p>
            <InputDemo />
            <Button variant={"search1"} className="py-5">
              Search
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-5">
            <div className="flex flex-col justify-center items-center">
              <FaRegUser size={35} color="gray" />
              <p className="text-[12px] text-gray-400">My account</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaRegHeart size={35} color="gray" />
              <p className="text-[12px] text-gray-400">Liked</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdOutlineShoppingCart size={35} color="gray" />
              <p className="text-[12px] text-gray-400">My Cart</p>
            </div>
          </div>
          <DrawerDemo />
        </div>
      </div>
      <div className="container">
       
      </div>
    </div>
  );
};

export default Header;
