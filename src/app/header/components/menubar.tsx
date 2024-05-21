import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="font-extrabold uppercase text-orange-500 ">
          Home <IoIosArrowDown />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="py-2">Home shop 1</MenubarItem>
          <MenubarItem className="py-2">Home shop 2</MenubarItem>
          <MenubarItem className="py-2">Home shop 3</MenubarItem>
          <MenubarItem className="py-2">Home shop 4</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-extrabold uppercase hover:text-orange-500">
          Shop <IoIosArrowDown />
        </MenubarTrigger>
        <MenubarContent>
          <div className='bg-[url("https://demo.lion-themes.net/amera/wp-content/uploads/2019/08/1212.jpg")] bg-no-repeat bg-cover bg-right w-[800px] h-[400px] flex justify-evenly items-center'>
            <ul className="flex flex-col gap-6 border-r-2 border-orange-200 pr-10 pl-2">
              <li className="font-bold uppercase">Shop Layout</li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Masonry Grid
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Pagination
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Ajax Load More
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Infinite Scroll
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Right
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Left
              </li>
            </ul>
            <ul className="flex flex-col gap-6 border-r-2 border-orange-200 pr-10 pl-2">
              <li className="font-bold uppercase">Shop Layout</li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Masonry Grid
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Pagination
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Ajax Load More
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Infinite Scroll
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Right
              </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Left
              </li>
            </ul>
            <ul className="flex flex-col gap-6 border-r-2 border-orange-200 pr-10 pl-2">
              <li className="font-bold uppercase">Shop Layout</li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Masonry Grid
              </li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Pagination
              </li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Ajax Load More
              </li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Infinite Scroll
              </li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Right
              </li>
              <li className="text-gray-700 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">
                Sidebare Left
              </li>
            </ul>
          </div>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="font-extrabold uppercase hover:text-orange-500 focus:text-orange-500">
          blog <IoIosArrowDown />
        </MenubarTrigger>
        <MenubarContent>
          <div className="px-10 py-4">
            <ul className="flex flex-col gap-6">
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">Grid Layout </li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">Large Image</li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">Left Sidebar</li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">Right Sidebar</li>
              <li className="text-gray-500 hover:text-orange-500 hover:transform hover:scale-110 duration-300 ease-in-out">No Sidebar</li>
            </ul>
          </div>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
