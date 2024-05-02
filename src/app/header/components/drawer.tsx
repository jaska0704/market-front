import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { IoMenu } from 'react-icons/io5';
import { InputDemo } from './input';
import { Button } from '@/components/ui/button';
import { FaAngleRight } from 'react-icons/fa6';


export const DrawerDemo = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <IoMenu color="" className="lg:hidden" />
      </DrawerTrigger>
      <DrawerContent className="h-screen w-[350px] p-2 rounded-none">
        <div className="flex border-2 border-orange-200 my-4">
          <InputDemo />
          <Button variant={"search"}>Search</Button>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <ul>
            <li className="border-t-2 border-b-2 py-3 flex justify-between items-center">
              Item 1 <FaAngleRight />
            </li>
            <li className="border-b-2 py-3 flex justify-between items-center">
              Item 2 <FaAngleRight />
            </li>
            <li className="border-b-2 py-3 flex justify-between items-center">
              Item 3 <FaAngleRight />
            </li>
            <li className="border-b-2 py-3 flex justify-between items-center">
              Item 4 <FaAngleRight />
            </li>
            <li className="border-b-2 py-3 flex justify-between items-center">
              Item 5 <FaAngleRight />
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
