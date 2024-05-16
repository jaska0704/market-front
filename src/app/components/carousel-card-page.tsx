"use server";
import React from "react";
import { CarouselCard } from "./carousel-card";
import { getProductVariant } from "../service/getProductVariant";

export const CarouselCardPage = async () => {
  const data = await getProductVariant();

  return (
    <div className="md:w-[95%] lg:w-[55%]">
      <CarouselCard data={data} />
    </div>
  );
};
