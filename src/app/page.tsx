import Image from "next/image";
import { getBanner } from './service/getBanner'
import { CarouselDApiDemo } from "./components/carousel";
import { log } from "console";

export default async function Home() {
  const data = await getBanner();
  console.log(data.results[0].image);
  
  
  
  return (
    <main className="w-full">
       <CarouselDApiDemo data={data.results}/>
    </main>
  );
}
