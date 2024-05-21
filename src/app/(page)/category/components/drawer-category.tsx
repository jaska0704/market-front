"use client";
import { DrawerDemo } from "@/app/header/components/drawer";
import { ImEqualizer } from "react-icons/im";
import Link from "next/link";
import React from "react";

interface types {
  data: {
    count: number;
    next: null;
    previous: null;
    results: {
      id: number;
      title: string;
      image: string;
      children: {
        id: number;
        title: string;
        image: string;
      }[];
    }[];
  };
  itemm: string;
}

export const DrawerCategory: React.FC<types> = ({ data, itemm }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container">
      <button
        className="fixed top-[50%] left-1 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <ImEqualizer size={25} />
      </button>
      <DrawerDemo
        open={open}
        direction="left"
        classN={`w-[300px] h-screen lg:${open ? "block" : "hidden"}`}
        children={
          <div className="overflow-y-auto">
            <div className="flex justify-end">
              <button onClick={() => setOpen(!open)}>X</button>
            </div>
            <ul>
              {data?.results?.map((item) => (
                <li key={item.id} className="py-2 border-b-2 border-gray-400 ">
                  <Link
                    className={
                      item.id === Number(itemm)
                        ? "text-orange-500"
                        : "text-black"
                    }
                    href={`/category/${item.id}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  );
};

{
  /* ul>li*5>a */
}
