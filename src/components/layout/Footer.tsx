import React from 'react'

const Footer = () => {
  return (
    <div className='md:h-[300px] mt-[30px] md:mt-14 w-full flex-col flex md:flex-row bg-[#FDF8EE] md:px-[150px] py-9'>
        <div className='flex-row flex md:gap-[100px] gap-14'>
        <div>
            <h3 className='font-bold text-sm md:text-xl '>Book Store</h3>
        </div>
        <div>
            <h3 className='font-bold text-sm md:text-xl '>Company</h3>
            <h6 className='pt-6 text-sm'>About Us?</h6>
            <h6 className='pt-6 text-sm md:text-lg'>How to Work?</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Popular Course</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Service</h6>
        </div>
        <div>
            <h3 className='font-bold md:text-xl text-sm '>Courses</h3>
            <h6 className='pt-6 text-sm md:text-lg'>Categories</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Offline Course</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Vedio Course</h6>
        </div>
        </div>
        <div className='flex flex-row mt-9 mx-14 md:mt-0 md:gap-[100px] gap-8'>
        <div>
            <h3 className='font-bold md:text-xl text-sm'>Support</h3>
            <h6 className='pt-6 text-sm md:text-lg'>FAQ</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Help Center</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Career</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Privacy</h6>
        </div>
        <div>
            <h3 className='font-bold text-sm md:text-xl '>Contact Info</h3>
            <h6 className='pt-6 text-sm md:text-lg'>+097424357</h6>
            <h6 className='pt-6 text-sm md:text-lg'>Elizabeth@joseph</h6>
            <h6 className='pt-6 text-sm md:text-lg'>4808, Helsinki</h6>
        </div>
        </div>
    </div>

  )
}

export default Footer