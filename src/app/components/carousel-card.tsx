"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarRatings } from "./star-ratings";
import Timer from "./timer";

interface Props {
  data: {
    count: number;
    next: null;
    previous: null;
    results: {
      id: 40;
      is_available: boolean;
      title: string;
      images: {
        image_id: string;
        image: string;
      }[];
      product: number;
      attribute_value: [];
      other_detail: string;
      price: string;
      price_with_discount: null;
      quantity: number;
    }[];
  }
  start: number;
  end: number;
}

export const CarouselCard: React.FC<Props> = ({ data, start, end }) => {
  return (
    <div className="w-full">
      <div className="w-[86%] px-5 flex justify-around items-center 2xl:p-0 xl:justify-between xl:px-6">
        <div>
          <span className="text-[15px] font-bold sm:text-[18px] md:text-[20px] ">
            Top Flash
          </span>{" "}
          <span className="text-[15px] font-thin leading-10 sm:text-[18px] md:text-[20px] ">
            Deals
          </span>
        </div>
        <div className="border-t-2 border-gray-300 w-[35%] lg:w-[56%] lg:mr-5 xl:w-[60%] 2xl:w-[68%]"></div>
      </div>
      <Carousel className="w-full relative mt-1 px-5">
        <CarouselContent className="">
          {data.results.slice(start, end).map((item, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col justify-center items-center bg-white rounded-lg sm:flex-row">
                <img
                  className="w-[50%] sm:w-[35%] sm:h-[30%]"
                  src={item.images[0].image}
                  alt="image"
                />
                <div className="my-3 px-2">
                  <span className="text-[11px] font-norm text-gray-400">
                    Game & Toy,
                  </span>{" "}
                  <span className="text-[11px] font-norm text-gray-400">
                    Smart Phones
                  </span>
                  <p className="text-[15px] font-bold text-[#0062B9] my-2">
                    {item.title}
                  </p>
                  <StarRatings />
                  <span className="text-[17px] font-bold leading-6">
                    ${item.price}
                  </span>{" "}
                  <span className="text-gray-400 text-[14px] line-through">
                    ${Number(item.price) + 8}
                  </span>
                  <div
                    className="my-3 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: item.other_detail.slice(0, 100),
                    }}
                  ></div>
                  <Timer />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[-25px] ml-[92%] sm:ml-[89%] md:ml-[92%] lg:ml-[88%] 2xl:ml-[92%]" />
        <CarouselNext className="absolute top-[-25px] mr-[60px] sm:mr-[89px] xl:mr-[75px]" />
      </Carousel>
    </div>
  );
};
