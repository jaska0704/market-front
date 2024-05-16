import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";


type types = {
  open: boolean;
  children: React.ReactNode;
  direction: "top" | "bottom" | "left" | "right" | undefined;
  classN: string;
};

export const DrawerDemo: React.FC<types> = ({ open, children, direction, classN }) => {
  return (
    <Drawer open={open} direction={direction}>
      <DrawerContent className={`h-screen p-2 rounded-none ${classN}`}>
        {children}
      </DrawerContent>
    </Drawer>
  );
};
//
