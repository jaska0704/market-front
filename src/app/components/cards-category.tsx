import React from "react";
import { getCategory } from "../service/getCategory";
import { CardCategory } from "./card-category";


export const CardsCategory = async () => {
  const data = await getCategory();
  const newData = data?.results?.filter((item) => item.children.length > 0);
 
 

  return (
    <div
      className={`grid grid-cols-1 mx-1 w-[87%] sm:grid-cols-2 sm:gap-0 md:grid-cols-3 lg:w-full lg:grid-rows-2 lg:grid-cols-5`}
    >
      {newData?.map((item) => (
        <CardCategory key={item.id} {...item} />
      ))}
    </div>
  );
};
