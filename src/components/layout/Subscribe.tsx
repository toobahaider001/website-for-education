import React from 'react'
import Button from '../shared/Button'
const Subscribe = () => {
  return (
    <div className='bg-purple-800 h-[300px] w-[90%] md:px-7 gap-6 mt-[100px] rounded-2xl mx-[10px] px-5 md:mx-[100px]'>
        <div className=' py-[40px] md:py-[60px] md:px-3 '>
            <h1 className='md:text-4xl text-xl text-white font-bold flex justify-center'>Subscribe to our new Newsletter</h1>
            <p className='flex justify-center text-white text-sm md:text-xl mt-3'>Lorem Ipsum is simply dummy text of the printing </p>
        </div>
        <div className='flex justify-center  '>
            <input type="text" placeholder='Email Address' className='  text-xs h-9 md:h-[60px] w-[150px] md:w-[500px] px-3 md:px-8 md:text-xl rounded-3xl' />
            <div className='md:-translate-x-[180px] md:mt-[4px]'>
            <Button label='Send' secondary />
            </div>
        </div>
    </div>
  )
}

export default Subscribe