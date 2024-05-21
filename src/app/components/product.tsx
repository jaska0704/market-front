"use client";
import { addProduct, remove } from "@/redux/reduser/reduser";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, Fade } from "react-awesome-reveal";
import { BsEye } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { addLike, likeDelete } from "@/redux/reduser/like-reduser";
import Image from "next/image";

interface typeProducts {
  id: number;
  is_available: boolean;
  title: string;
  images: { image: string; image_id: number }[];
  product: number;
  attribute_value: [];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount: number;
  userPrice: number;
}[]

const Products = (props: typeProducts) => {
  const { cartProduct } = useSelector((state: RootState) => state.reduser);
  const { likedProduct } = useSelector((state: RootState) => state.like);
  const cartId = cartProduct.find((item: any) => item.id == props.id);
  const likeId = likedProduct.find((item: any) => item.id == props.id);
  const dispatch = useDispatch();

  const AddProductcart = () => {
    dispatch(addProduct(props));
  };
  const removeProduct = () => {
    dispatch(remove(props));
  };
  console.log();
  

  const AddLikeProduct = () => {
    dispatch(addLike(props));
  }
  const DelLikeProduct = () => {
    dispatch(likeDelete(props));
  }

  return (
    <div className="w-[250px] h-[310px] bg-white shadow-lg flex flex-col items-center p-4 mb-6 justify-between py-3 relative group overflow-hidden rounded-xl md:w-[230px] lg:w-[200px]">
      <div className="flex justify-center overflow-hidden ">
        <Image
          className="w-full h-[180px] hover:scale-110 transition-all duration-300 ease-in-out"
          src={props?.images[0].image}
          alt="image"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-between w-full py-6">
        <h1 className="font-bold uppercase text-[12px]">{props.title}</h1>
        <p className="font-bold uppercase text-[20px] text-blue-500">
          ${props.price}
        </p>
      </div>
      <div className="absolute left-0 top-[-100%] opasity-0  group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500 ">
        <div className="flex flex-col justify-between h-full">
          <Slide>
            <div className="flex flex-col ml-[80%] gap-5 items-center">
              <button className="w-10 h-10 bg-zinc-50 rounded-full grid place-content-center">
                <Link href={`/product/${cartId ? cartId.id : props.id}`}>
                  <BsEye size={30} color="orange" />
                </Link>
              </button>
              {likeId ? (
                <button onClick={() => DelLikeProduct()}>
                  <FaHeart color="red" size={30} />
                </button>
              ) : (
                <button onClick={() => AddLikeProduct()}>
                  <FaHeart color="white" size={30} />
                </button>
              )}
            </div>
          </Slide>
          <Fade cascade damping={0.7}>
            <p className="text-[12px] text-white">{props.title}</p>
            <h1
              dangerouslySetInnerHTML={{
                __html: props.other_detail.slice(0, 100),
              }}
              className="text-[10px] text-white"
            ></h1>
            {cartId ? (
              <div className="w-full border-t-2 pt-5">
                <button
                  onClick={() => removeProduct()}
                  className="bg-red-500 text-white px-[76px] py-2 rounded-3xl outline-none lg:px-14"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="w-full border-t-2 pt-5">
                <button
                  onClick={() => AddProductcart()}
                  className="bg-orange-400 text-white px-14 py-2 rounded-3xl outline-none lg:px-8"
                >
                  + Add to cart
                </button>
              </div>
            )}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Products;
