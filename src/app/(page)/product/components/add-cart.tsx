import { StarRatings } from '@/app/components/star-ratings';
import React from 'react'

export const AddCart: React.FC<any> = ({data}) => {
  return (
    <div className="">
      <h2 className="text-3xl py-2 sm:text-2xl">{data.title}</h2>
      <StarRatings />
      <p className="text-2xl my-7 font-bold sm:text-xl">${data.price}</p>
      <h1
        dangerouslySetInnerHTML={{ __html: data.other_detail }}
        className=""
      ></h1>
      <div>
        <span className="text-xl px-10 py-1 border-2 rounded-full">1</span>
        <button className="bg-orange-400 text-white px-5 py-2 rounded-3xl outline-none">
          Add to cart
        </button>
      </div>
    </div>
  );
}
