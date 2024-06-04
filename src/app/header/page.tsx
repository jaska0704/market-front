"use client";
import React, { useEffect } from "react";
import { BiSupport } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { SlActionUndo } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InputDemo } from "./components/input";
import { DrawerDemo } from "./components/drawer";
import { MenubarDemo } from "./components/menubar";
import { Logo } from "./components/logo";
import dynamic from "next/dynamic";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { likeDelete } from "@/redux/reduser/like-reduser";
import { Input } from "@/components/ui/input";
import useDebounce from "./hooks/useDebounse";
const Favorite = dynamic(() => import("./components/favorite"), {
  ssr: false,
})
const ModeToggle = dynamic(() => import("./components/modetoggle"), {
  ssr: false,
});
const Cart = dynamic(() => import("./components/cart"), {
  ssr: false,
});

interface Props {
  id: 40;
  is_available: true;
  title: "bag";
  images: {
    image_id: string;
    image: string;
  }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount: number;
  userPrice: number;
}

const Header = () => {
  const [darc, setDarc] = React.useState(false);
  const [darc1, setDarc1] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const value = useDebounce(search, 500);
  const {likedProduct} = useSelector((state: RootState) => state.like);
  const dispatch = useDispatch();


  useEffect(() => {
    const getData = async () => {
      if(search.length >= 3){
        try {
          const res = await fetch(`http://135.181.108.207/product_variant/?search=${value}`, {next:{revalidate: 100}});
          const data = await res.json();
          setResults(data.results);
        } catch (error) {
          console.log("Failed to fetch data:", error);
          
        }
      }else{
        setResults([]);
      }
    };
    getData();
  }, [value]);
  

  return (
    <div className="w-full bg-white dark:bg-black fixed top-0 left-0 right-0 z-40">
      <div className="container text-base text-center  hidden sm:block md:flex md:justify-between md:items-center">
        <p className="my-4">Welcome to Worldwide Electronics Store</p>
        <ul className="flex justify-center my-3 dark:text-white sm:gap-5">
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
      <div className=" border-y-2 dark:bg-black">
        <div className="container">
          <div className=" py-6 flex justify-between items-center ">
            <Link href="/">
              <Logo dark={darc} />
            </Link>
            <button onClick={() => setDarc1(!darc1)}>
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
            <div className="hidden relative lg:flex lg:justify-between lg:items-center lg:w-[50%] border-2 border-orange-500 rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full pl-2 ">
              <Input
                type="search"
                placeholder="Search Products..."
                className="border-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant={"search1"} className="py-5">
                Search
              </Button>
              <div className="flex min-w-[300px] max-h-[400px] overflow-auto top-[101%] z-10 absolute bg-white">
                {search?.length > 1 ? (
                  <div style={{ position: "relative" }}>
                    {!results?.length && (
                      <div className="grid place-items-center min-w-[590px]">
                        <Image
                          src="/3973481.jpg"
                          alt="img"
                          width={300}
                          height={300}
                        />
                      </div>
                    )}
                    {results?.map((item: Props) => (
                      <Link
                        onClick={() => setSearch("")}
                        href={`/product/${item.id}`}
                        key={item.id}
                      >
                        <div className="flex items-center gap-4 bg-white border-b-[1px] flex-wrap w-[590px] h-[60px] max-xl:w-[300px]">
                          <Image
                            className="w-[50px] h-[50px] object-cover"
                            width={50}
                            height={50}
                            src={item.images[0].image}
                            alt="img"
                          />
                          <strong>{item.title}</strong>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <Favorite
              setOpen={setOpen}
              setShow={setShow}
              open={open}
              show={show}
            />
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
              open={show}
              classN="max-w-[460px] ml-0 sm:ml-[40%] md:ml-[50%] lg:ml-[60%] xl:ml-[70%] h-screen"
              direction="right"
              children={
                <div className="relative h-screen">
                  <div className="py-8 flex justify-between items-center px-4">
                    <h2 className="text-[22px] font-[900]">Favorites List</h2>
                    <SlActionUndo
                      size={20}
                      color="gray"
                      onClick={() => setShow(false)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    {likedProduct.length > 0 ? (
                      likedProduct.map((item) => (
                        <div
                          className="flex justify-between items-center p-1 border-2"
                          key={item.id}
                        >
                          <Image
                            src={item.images[0].image}
                            alt="image"
                            width={70}
                            height={70}
                          />
                          <div>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <button className="bg-orange-400 text-white px-2 text-xs py-1 rounded-3xl">
                              + Add to cart
                            </button>
                            <button
                              onClick={() => dispatch(likeDelete(item))}
                              className="bg-red-400 text-white px-2 text-xs py-1 rounded-3xl"
                            >
                              Did not like
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h1>No Products</h1>
                    )}
                  </div>
                </div>
              }
            />
            <DrawerDemo
              direction="left"
              open={darc1}
              classN="max-w-[350px]"
              children={
                <>
                  <div className="flex flex-col items-end">
                    <button onClick={() => setDarc(false)}>X</button>
                    <button onClick={() => setDarc(!darc)}>
                      <ModeToggle />
                    </button>
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
