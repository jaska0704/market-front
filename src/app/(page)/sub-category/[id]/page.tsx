"use server";
import { getProductCategory } from "@/app/service/getProductCategory";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { DrawerSubCategory } from "../components/drawer-subcategory";
import { getSubCategory } from "@/app/service/getSubCategory";
import Link from "next/link";
import Image from "next/image";
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
      <DrawerSubCategory subData={subData} itemm={params.id} />
      <div className="lg:flex lg:gap-10">
        <div className="w-[400px] h-[500px] border-2 border-gray-300 rounded-tr-md p-2 sticky top-[240px] overflow-y-auto mb-10 hidden lg:block">
          <ul className="text-start text-xl font-medium">
            {subData?.results?.map((item) => (
              <li className="py-2 border-b-2 border-gray-400" key={item.id}>
                <Link href={`/sub-category/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid place-content-center gap-3 overflow-y-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-7 md:grid md:ml-10 md:grid-cols-4 md:place-content-start">
          {data?.results?.length ? (
            data?.results?.map((item) => <Products key={item.id} {...item} />)
          ) : (
            <div className="">
              <Image src="/3973481.jpg" alt="img" width={300} height={300} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SubCategoryList;
