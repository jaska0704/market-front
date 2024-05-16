"use client";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { SlActionUndo } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InputDemo } from "./components/input";
import { SelectDemo } from "./components/select";
import { DrawerDemo } from "./components/drawer";
import { MenubarDemo } from "./components/menubar";
import { Logo } from "../components/logo";
import dynamic from "next/dynamic";
const Favorite = dynamic(() => import("./components/favorite"), {
  ssr: false,
})
const ModeToggle = dynamic(() => import("./components/modetoggle"), {
  ssr: false,
});
const Cart = dynamic(() => import("./components/cart"), {
  ssr: false,
});



const Header = () => {
  const [darc, setDarc] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // const setOpenn = () => setOpen(!open);

  return (
    <div className="w-full bg-white fixed top-0 left-0 right-0 z-40">
      <div className="container text-base text-center hidden sm:block md:flex md:justify-between md:items-center">
        <p className="my-4">Welcome to Worldwide Electronics Store</p>
        <ul className="flex justify-center my-3 sm:gap-5">
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
      <div className=" border-y-2">
        <div className="container">
          <div className=" py-6 flex justify-between items-center">
            <Link href="/">
              <Logo dark={darc} />
            </Link>
            <button onClick={() => setDarc(!darc)}>
              <IoMenu color="" size={40} className="lg:hidden" />
            </button>
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
            <div className="hidden lg:flex lg:justify-between lg:items-center lg:w-[50%] border-2 border-orange-500 rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full pl-2 ">
              <SelectDemo />
              <p className="text-[18px]">|</p>
              <InputDemo />
              <Button variant={"search1"} className="py-5">
                Search
              </Button>
            </div>
            <Favorite setOpen={setOpen} open={open}/>
            <DrawerDemo
              open={open}
              classN="max-w-[460px] ml-0 sm:ml-[40%] md:ml-[50%] lg:ml-[60%] xl:ml-[70%] h-screen"
              direction="right"
              children={
                <div className="relative h-screen">
                  <div className="py-8 flex justify-between items-center px-4">
                    <h2 className="text-[22px] font-[900]">Shopping Cart</h2>
                    <SlActionUndo
                      size={20}
                      color="gray"
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <Cart />
                </div>
              }
            />
            <DrawerDemo
              direction="left"
              open={darc}
              classN="max-w-[350px]"
              children={
                <>
                  <div className="flex flex-col items-end">
                    <button onClick={() => setDarc(false)}>X</button>
                    <div className="flex border-2 w-full border-orange-200 my-4">
                      <InputDemo />
                      <Button variant={"search"}>Search</Button>
                    </div>
                  </div>
                  <div className="mx-auto w-full max-w-sm">
                    <ul>
                      <li className="border-t-2 border-b-2 py-3 flex justify-between items-center">
                        Item 1 <FaAngleRight />
                      </li>
                      <li className="border-b-2 py-3 flex justify-between items-center">
                        Item 2 <FaAngleRight />
                      </li>
                      <li className="border-b-2 py-3 flex justify-between items-center">
                        Item 3 <FaAngleRight />
                      </li>
                      <li className="border-b-2 py-3 flex justify-between items-center">
                        Item 4 <FaAngleRight />
                      </li>
                      <li className="border-b-2 py-3 flex justify-between items-center">
                        Item 5 <FaAngleRight />
                      </li>
                    </ul>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
      <div className="container hidden lg:flex lg:justify-between lg:py-3 ">
        <MenubarDemo />
        <button onClick={() => setDarc(!darc)}>
          <ModeToggle />
        </button>
      </div>
    </div>
  );
};

export default Header;
