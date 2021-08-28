import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative h-[190px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[920px] '>
      <Image
        className=''
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='contain'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect/</p>
        <button className='text-purple-500 bg-white px-10 py-2 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 md:py-4' >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
