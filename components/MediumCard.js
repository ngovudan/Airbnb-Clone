import Image from 'next/image'
import React from 'react'

function MediumCard({ img, title }) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative md:h-96 h-80 md:w-[387px] w-[310px]'>
        <Image src={img} layout='fill' className='rounded-xl' />
      </div>
      <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard
