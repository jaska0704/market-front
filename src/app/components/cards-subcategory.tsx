import dynamic from "next/dynamic";
import React from "react";
import { getProductCategory } from "../service/getProductCategory";
import { CarouselSpacing } from "./carousel-subcategory";

const CardsSubcategory = async () => {
  const data = await getProductCategory(String(2176));
  return <CarouselSpacing data={data} />;
};
export default CardsSubcategory;
