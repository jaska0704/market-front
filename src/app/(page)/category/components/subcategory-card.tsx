import Image from "next/image";
import Link from "next/link";
import React from "react";

interface types {
 
    id: number;
    title: string;
    image: string;
  }[];


export const SubcategoryCard = (props: types) => {
  return (
    <Link href={`/sub-category/${props.id}`} className="flex flex-col justify-between ">
      <Image
        src={props.image}
        alt={props.title}
        width={200}
        height={200}
      />
      <p>{props.title}</p>
    </Link>
  );
};
