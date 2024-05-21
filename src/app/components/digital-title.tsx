import React from 'react'

export const DigitalTitle = ({nameSub}: {nameSub: string}) => {
  return (
    <div className='flex justify-start items-center gap-1 mt-10'>
        <h2 className="text-2xl font-bold">{nameSub}</h2>
        <h3 className='text-2xl'>Products</h3>
        <div className="border-t-2 border-gray-300 w-[200px] mr-9 lg:w-[40%] lg:mr-[40px] 2xl:w-[60%]"></div>
    </div>
  )
}
