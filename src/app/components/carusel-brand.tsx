import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBrand } from "../service/getbrand";
import Image from "next/image";

export const CarouselBrand = async() => {
    const data = await getBrand();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full my-10"
    >
      <CarouselContent>
        {data.results.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="">
                <Image src={item.image} alt="image" width={200} height={200} className="w-full h-[160px]"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
