import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Products from "./product";

interface Prop {
  data: {
    count: number;
    next: null;
    previous: null;
    results: {
      id: number;
      is_available: boolean;
      title: string;
      images: { image: string; image_id: number }[];
      product: number;
      attribute_value: [];
      other_detail: string;
      price: number;
      price_with_discount: null;
      quantity: number;
      userCount: number;
      userPrice: number;
    }[];
  };
};

export const CarouselSpacing: React.FC<Prop> = ({data}) => {
  return (
    <div className="flex flex-col">
      <div className="w-[90%] px-5 flex justify-between items-center md:w-[95%] md:px-6 lg:w-[400px]">
        <div>
          <span className="text-[15px] font-bold sm:text-[18px] md:text-[20px] ">
            Top Flash
          </span>{" "}
          <span className="text-[15px] font-thin leading-10 sm:text-[18px] md:text-[20px] ">
            Deals
          </span>
        </div>
        <div className="border-t-2 border-gray-300 w-[50%] mr-9 lg:w-[40%] lg:mr-[40px]"></div>
      </div>
      <div className="max-w-full mx-auto mb-[80px] lg:max-w-[430px]">
        <Carousel >
          <CarouselContent >
            {data?.results.map((item, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/2"
              >
                <Products {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-19px] ml-[92%] sm:ml-[95%] md:ml-[97%] lg:ml-[88%]" />
          <CarouselNext className="absolute top-[-19px] mr-[60px] sm:mr-[49px] md:mr-[40px] lg:mr-[90px]" />
        </Carousel>
      </div>
    </div>
  );
}
