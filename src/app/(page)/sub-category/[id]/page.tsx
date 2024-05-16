"use server";
import { getProductCategory } from "@/app/service/getProductCategory";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { DrawerCategory } from "../components/drawer-category";
import { getSubCategory } from "@/app/service/getSubCategory";
import Link from "next/link";
const Products = dynamic(() => import("@/app/components/product"), {
  ssr: false,
});
const SubCategoryList: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  const data = await getProductCategory(params.id);
  const subData = await getSubCategory();
  
  

  return (
    <div className="w-full text-center">
      <DrawerCategory subData={subData} itemm={params.id} />
      <div className="w-[23%] h-[500px] border-2 border-gray-300 rounded-tr-md p-2 fixed top-[250px] left-1 overflow-y-auto mb-10 hidden lg:block">
        <ul>
          {subData?.results?.map((item) => (
            <li className="py-2 border-b-2 border-gray-400" key={item.id}>
              <Link href={`/sub-category/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid place-content-center p-4 overflow-y-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-7 md:grid md:ml-10 md:grid-cols-3  lg:ml-[25%]">
        {data?.results?.length ? (
          data?.results?.map((item) => (
          <Products key={item.id} {...item} />
        ))
        ): "hech bolo yoq"} 
      </div>
    </div>
  );
};
export default SubCategoryList;
