"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Prop {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
}

export const CarouselDApiDemo: React.FC<Prop> = ({ data }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
    // const data = await getBanner();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full mt-4">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex items-center justify-center w-full h-[350px] md:h-[390px] lg:h-[500px]">
                  <div className="h-full w-full relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full"
                    />
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl absolute top-[48%] left-[10%] ">
                      {item.title}
                    </h1>
                    <h1
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="sm:text-lg md:text-xl lg:text-2xl absolute top-[58%] left-[10%] "
                    ></h1>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0" />
        <CarouselNext className="absolute right-0" />
      </Carousel>
    </div>
  );
};
