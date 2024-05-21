import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dynamic from "next/dynamic";
const Products = dynamic(() => import("@/app/components/product"), {
  ssr: false,
}) 

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
      price: string;
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
      <div className="w-[90%] px-5 flex items-center sm:gap-3 md:w-[95%] md:px-6 lg:w-[400px] 2xl:w-[580px]">
        <div>
          <span className="text-[15px] font-bold sm:text-[18px] md:text-[20px] ">
            Top Flash
          </span>{" "}
          <span className="text-[15px] font-thin leading-10 sm:text-[18px] md:text-[20px] ">
            Deals
          </span>
        </div>
        <div className="border-t-2 border-gray-300 w-[57%] mr-9 lg:w-[40%] lg:mr-[40px] 2xl:w-[60%]"></div>
      </div>
      <div className="w-full mx-auto mb-[40px] lg:max-w-[430px] 2xl:max-w-[620px]">
        <Carousel >
          <CarouselContent className="mt-3">
            {data?.results.map((item, index) => (
              <CarouselItem
                key={index}
                className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/2 2xl:basis-1/3"
              >
                <Products {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-19px] ml-[92%] sm:ml-[95%] md:ml-[97%] lg:ml-[91%]" />
          <CarouselNext className="absolute top-[-19px] mr-[60px] sm:mr-[49px] md:mr-[40px] lg:mr-[60px]" />
        </Carousel>
      </div>
    </div>
  );
}
