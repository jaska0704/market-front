"use server";
import { getBanner } from "./service/getBanner";
import { CarouselDApiDemo } from "./components/carousel";
import { AccordionDemo } from "./components/accardion";
import { CardsCategory } from "./components/cards-category";
import { CarouselCardPage } from "./components/carousel-card-page";
import CardsSubcategory from "./components/cards-subcategory";

export default async function Home() {
  const data = await getBanner();

  return (
    <main className="w-full bg-slate-200 dark:bg-black">
      <div className="container">
        <div className=" w-full lg:flex lg:gap-2">
          <div className="hidden lg:block lg:w-3/12 shadow-2xl">
            <AccordionDemo />
          </div>
          <div className="lg:w-9/12">
            <CarouselDApiDemo data={data.results} />
          </div>
        </div>
        <div className=" bg-[#f8f4f4] my-6 mx-3 rounded-lg px-9 py-5 shadow-lg flex flex-col dark:text-black gap-7 sm:flex-row sm:flex-wrap sm:gap-3 xl:gap-3 ">
          <div className="flex items-center gap-4 sm:border-r-2 sm:w-[48%] md:w-[32%] lg:w-[230px] xl:w-[19%]">
            <img
              src="./icon1.png"
              alt="icon"
              className="w-8 h-6 lg:w-5 lg:h-4 2xl:w-10 2xl:h-9"
            />
            <div>
              <h2 className="font-bold uppercase text-[13px]">Free delivery</h2>
              <p className="text-xs">For all orders over $120</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:border-r-2 sm:w-[48%] md:w-[32%] lg:w-[230px] xl:w-[19%]">
            <img
              src="./icon2.png"
              alt="icon"
              className="w-8 h-6 lg:w-5 lg:h-4 2xl:w-10 2xl:h-9"
            />
            <div>
              <h2 className="font-bold uppercase text-[13px]">Safe payment</h2>
              <p className="text-xs">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:border-r-2 md:border-r-0 sm:w-[48%] md:w-[32%] lg:w-[230px]  lg:border-r-2 xl:w-[19%]">
            <img
              src="./icon3.png"
              alt="icon"
              className="w-8 h-6 lg:w-5 lg:h-4 2xl:w-10 2xl:h-9"
            />
            <div>
              <h2 className="font-bold uppercase text-[13px]">
                Shop with confidence
              </h2>
              <p className="text-xs">If goods have problems</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:border-r-2 sm:w-[48%] md:w-[32%] lg:w-[230px] xl:w-[19%]">
            <img
              src="./icon4.png"
              alt="icon"
              className="w-8 h-6 lg:w-5 lg:h-4 2xl:w-10 2xl:h-9"
            />
            <div>
              <h2 className="font-bold uppercase text-[13px]">
                24/7 help center
              </h2>
              <p className="text-xs">Deticated 24/7 support</p>
            </div>
          </div>
          <div className="flex items-center gap-4 sm:w-[48%] md:w-[32%] lg:w-[230px] xl:w-[19%]">
            <img
              src="./icon5.png"
              alt="icon"
              className="w-8 h-6 lg:w-5 lg:h-4 2xl:w-10 2xl:h-9"
            />
            <div>
              <h2 className="font-bold uppercase text-[13px]">
                Friendly Services
              </h2>
              <p className="text-xs">30 day sati</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-5 md:flex-row md:justify-around my-10">
          <img className=" md:w-[31%]" src="./banner11.jpg" alt="banner" />
          <img className=" md:w-[31%]" src="./banner12.jpg" alt="banner" />
          <img className=" md:w-[31%]" src="./banner13.jpg" alt="banner" />
        </div>
        <div className="mb-5 lg:scrollbar-alert-danger">
          <CardsCategory />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <CarouselCardPage />
          <CardsSubcategory />
        </div>
      </div>
    </main>
  );
}
