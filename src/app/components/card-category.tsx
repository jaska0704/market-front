"use client";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import React from "react";

interface Props {
  id: number;
  title: string;
  image: string;
  children: {
    id: number;
    title: string;
    image: string;
  }[];
}
[];

export const CardCategory: React.FC<Props> = (item) => {
  return (
    <div
      id="card"
      key={item.id}
      className="bg-white relative flex items-center justify-around border-b-2 border-gray-300 pb-3 overflow-hidden group sm:border-2 sm:p-4 lg:w-full lg:justify-between lg:h-[140px]"
    >
      <div>
        <h3 className="text-sm text-gray-700">
          <a href={`#${item.id}`}>{item.title}</a>
        </h3>
        <p>({item.children.length} items)</p>
      </div>
      <div className="group-hover:opacity-75">
        <img src={item.image} className="w-[180px] lg:w-[70px]" />
      </div>

      <div className="absolute left-0 top-[-100%] opasity-0  group-hover:top-0 p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm divide-neutral-500 duration-500 ">
        <ul className="overflow-y-scroll h-full">
          {item.children.map((child) => (
            <Slide>
              <Link href={`sub-category/${child.id}`}>
                <li className="flex items-center justify-between hover:bg-orange-500 rounded px-2 py-1">
                  <img
                    className="w-[40px] h-[40px]"
                    src={child.image}
                    alt="image"
                  />
                  <p className="text-white">{child.title}</p>
                </li>
              </Link>
            </Slide>
          ))}
        </ul>
      </div>
    </div>
  );
};
