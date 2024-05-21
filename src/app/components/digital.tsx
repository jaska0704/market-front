import React from 'react'
import { getProductVariant } from '../service/getProductVariant'
import { StarRatings } from './star-ratings'
import Image from 'next/image'
import Link from 'next/link'

export const Digital = async() => {
    const data = await getProductVariant()
  return (
    <div>
      <div className="flex flex-col gap-2 sm:hidden">
        {data?.results?.slice(6, 8).map((item) => (
          <Link href={`/product/${item.id}`} className="flex justify-start items-center gap-6 bg-white h-[200px]">
            <Image
              src={item.images[0].image}
              alt="image"
              width={200}
              height={200}
            />
            <div className="text-black">
              <h1>{item.title}</h1>
              <StarRatings />
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-2 sm:my-3 lg:hidden">
        {data?.results?.slice(8, 12).map((item) => (
          <Link href={`/product/${item.id}`} className="flex items-center px-2  gap-6 bg-white h-[170px] shadow-lg min-w-[300px] md:gap-3 ">
            <Image
              src={item.images[0].image}
              alt="image"
              width={80}
              height={80}
            />
            <div className="text-black">
              <h1>{item.title}</h1>
              <StarRatings />
              <p>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-2 lg:my-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5">
        {data?.results?.slice(10,16).map((item) => (
          <Link href={`/product/${item.id}`} className="flex items-center px-2  gap-6 bg-white h-[170px] shadow-lg max-w-[400px] md:gap-3 ">
            <Image
              src={item.images[0].image}
              alt="image"
              width={80}
              height={80}
              className='xl:w-[50%]'
            />
            <div className="text-black flex flex-col gap-2">
              <h1 className='text-lg'>{item.title}</h1>
              <StarRatings />
              <p className='text-blue-300'>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
