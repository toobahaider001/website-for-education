import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'
import NavbarImage from "@/public/image.png"

const Hero = () => {
  return (
  <div className='w-full md:flex py-6 flex sm:flex-row flex-col'>
  {/* text */}
    <div className='md:w-[50%] w-full md:px-8 md:py-[100px]'>
      <h1 className='md:text-5xl text-2xl sm:text-3xl font-bold'>The <span className='md:text-5xl text-2xl sm:text-3xl text-orange-500 font-bold'>Smart</span></h1>
      <h2 className='md:text-5xl text-2xl sm:text-3xl font-bold'>Choice For <span className='md:text-5xl text-3xl text-orange-500 font-bold'>Future</span></h2>
      <p className='md:text-lg py-5 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione illo cum porro temporibus quae odio.</p>
      <div className='flex py-4 gap-2 md:gap-0 '>
      <input type="text" placeholder='Search For a location' className='h-9 w-[200px]  px-3 text-sm md:h-[50px] md:w-[200px] rounded-xl md:text-lg' />
      <Button label='Continue' primary/>
        </div>
    </div>
        {/* image */}
        <div className='md:w-[70%] w-full'>
      <Image 
      src={NavbarImage}
      alt=''
      height={900}
      width={900}/>
    </div>
  </div>
  )
}

export default Hero