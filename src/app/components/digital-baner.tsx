import Image from 'next/image'
import React from 'react'

export const DigitalBaner = ({image}: {image: string}) => {
  return (
    <div className='hidden md:block'>
        <Image src={image} alt="image" width={220} height={400} className='md:h-[350px] w-full'/>
    </div>
  )
}
