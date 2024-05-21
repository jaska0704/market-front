"use server";
import React from "react";
import { CarouselCard } from "./carousel-card";
import { getProductVariant } from "../service/getProductVariant";

interface type {
  start: number;
  end: number;
}
export const CarouselCardPage: React.FC<type> = async ({start, end}) => {
  const data = await getProductVariant();

  return (
    <div className="md:w-[95%] lg:w-[55%]">
      <CarouselCard data={data} start={start} end={end}/>
    </div>
  );
};
