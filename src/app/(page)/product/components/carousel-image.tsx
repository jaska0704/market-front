import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface props {
  data: {
    id: number;
    is_available: true;
    title: string;
    images: {
      image_id: number;
      image: string;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: string;
    price_with_discount: null;
    quantity: number;
  };
};

export const CarouselImage: React.FC<props> = ({ data }) => {
  return (
    <Carousel className="max-w-[500px] w-full border-2 rounded-lg sm:max-w-full ">
      <CarouselContent className=" items-center p-3">
        {data?.images.map((item) => (
          <CarouselItem key={item.image_id}>
            <img className="w-full" src={item.image} alt="" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
