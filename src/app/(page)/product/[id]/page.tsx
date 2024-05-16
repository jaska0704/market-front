import { getSingleProduct } from "@/app/service/getSingleProduct";
import { NextPage } from "next";
import React from "react";
import { CarouselImage } from "../components/carousel-image";
import { StarRatings } from "@/app/components/star-ratings";
import dynamic from "next/dynamic";
const ButtonAdd = dynamic(() => import("../components/button-add"), {
  ssr: false,
})

const ProductPage: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getSingleProduct(params.id);

  return (
    <div className="container mb-[40px] sm:flex sm:gap-6 w-full">
      <div className="px-10 sm:w-2/4">
        <CarouselImage data={data} />
        <div className="flex items-center gap-2">
          {data?.images?.map((item) => (
            <img src={item.image} className="w-[70px] sm:w-[80px]" alt="image" />
          ))}
        </div>
      </div>
      <div className="sm:w-2/4">
        <h2 className="text-3xl py-2 sm:text-2xl">{data.title}</h2>
        <StarRatings/>
        <p className="text-2xl my-7 font-bold sm:text-xl">${data.price}</p>
        <h1
          dangerouslySetInnerHTML={{ __html: data.other_detail }}
          className=""
        ></h1>
        <div className="flex gap-5">
          <span className="text-xl px-10 py-1 border-2 rounded-full">1</span>
          <ButtonAdd data={data} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
