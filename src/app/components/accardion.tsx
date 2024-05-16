'use server'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getCategory } from "../service/getCategory";
import Link from "next/link";


export const AccordionDemo = async () => {
  const data = await getCategory()
  
  return (
    <Accordion type="single" collapsible className="w-full px-5 overflow-auto h-[500px] bg-white mt-4 dark:text-black">
      {data?.results?.map((item, index) => (
        <AccordionItem value={`item-${index + 1}`} key={item.id}>
          <AccordionTrigger className="outline-none ">{item.title}</AccordionTrigger>
          {item.children.map((child) => (
            <AccordionContent>
              <Link href={`sub-category/${child.id}`} className='border-b-2 py-1'>{child.title}</Link>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
