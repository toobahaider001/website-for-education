import Link from 'next/link'
import React from 'react'
import { GiBookCover } from 'react-icons/gi'
import Button from '../shared/Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between md:px-8 md:mt-8 mt-3 '>
      <div className="flex items-center md:gap-4">
      <GiBookCover  className='md:h-10 w-9 text-purple-900 h-[60px]'/>
        <h1 className='font-bold md:text-xl'>Book Store</h1>
      </div>
      <div className=' md:flex hidden  gap-8 font-semibold text-lg '>
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/services">Our services</Link>
        <Link href="/contact">Contact us</Link>
      </div>
      <div>
        <Button  label='Sign in' primary />
      </div>
    </div>
    
  )
}

export default Navbar