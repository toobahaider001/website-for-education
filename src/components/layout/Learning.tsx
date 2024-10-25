import React from 'react'
import LearningImage from "@/public/learning.png"
import Image from 'next/image'
const Learning = () => {
  return (
    <div className='pt-[100px] mt-[80px] md:flex bg-[#FDF8EE] md:h-[750px]   '>
        <div >
            <Image
            src={LearningImage}
            alt=''
            height={800}
            width={800} />
        </div>
        <div className='md:px-[200px] mt-4'>
            <h1 className='font-bold md:text-6xl text-2xl'>Premium <span className='text-orange-500 md:text-6xl font-bold'>Learning</span></h1>
            <h1 className='md:text-6xl font-bold mt-3 text-2xl '>Experience</h1>
            <h4 className='font-semibold text-md  md:text-xl mt-6'>Easily Accessible</h4>
            <p className='text-gray-500 md:text-xl text-xs mt-4'>Learning will fell very comfortable with courslab</p>
            <h4 className='font-semibold md:text-xl mt-6'>Fun Learning Experience</h4>
            <p className='text-gray-600 md:text-xl mt-4 text-xs'>Learning will fell very comfortable with courslab</p>
        </div>
    </div>
  )
}

export default Learning