"use server";
import { getProductCategory } from "@/app/service/getProductCategory";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { getSubCategory } from "@/app/service/getSubCategory";
import Link from "next/link";
import { DrawerCategory } from "../components/drawer-category";
import { SubcategoryCard } from "../components/subcategory-card";
import { getCategoryId } from "@/app/service/getCategoryId";
import { getCategory } from "@/app/service/getCategory";

const CategoryList: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  
  const subData = await getCategoryId(params.id);
  const data = await getCategory()
//   const newData = subData?.filter((item) => item.children.length > 0);
  

  return (
    <div className="w-full text-center">
      <DrawerCategory data={data} itemm={params.id} />
      <div className="lg:flex lg:gap-10">
        <div className="w-[400px] h-[500px] border-2 border-gray-300 rounded-tr-md p-2 sticky top-[240px] overflow-y-auto mb-10 hidden lg:block">
          <ul className="text-start">
            {data.results.map((item) => (
              <li className={`py-2 border-b-2 border-gray-400 ${item.id === Number(params.id) ? 'text-orange-500' : 'text-black'}`} key={item.id}>
                <Link className="text-xl font-medium" href={`/category/${item.id}`}>{item.title}</Link>
                <p>({item.children.length})items</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid place-content-center gap-3 overflow-y-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-7 md:grid md:ml-10 md:grid-cols-4 md:place-content-start">
          {subData?.children?.map((item) => <SubcategoryCard {...item} />)
            }
        </div>
      </div>
    </div>
  );
};
export default CategoryList;
