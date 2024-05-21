import dynamic from "next/dynamic";
import React from "react";
import { getProductCategory } from "../service/getProductCategory";
import { CarouselSpacing } from "./carousel-subcategory";

const CardsSubcategory = async ({ id }: { id: number }) => {
  const data = await getProductCategory(String(id));
  
  return <CarouselSpacing data={data} />;
};
export default CardsSubcategory;
