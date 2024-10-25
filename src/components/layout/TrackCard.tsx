import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'

const cards = [
  {
    src: 'https://images.pexels.com/photos/7281589/pexels-photo-7281589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courseType: 'UI/UX Design',
    courseName: 'UI/UX Design for Beginners',
    duration: '22hr 30min',
    courses: 34,
    sales: 250
  },
  {
    src: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courseType: 'UI/UX Design',
    courseName: 'UI/UX Design for Beginners',
    duration: '22hr 30min',
    courses: 34,
    sales: 250
  },
  {
    src: 'https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courseType: 'UI/UX Design',
    courseName: 'UI/UX Design for Beginners',
    duration: '22hr 30min',
    courses: 34,
    sales: 250
  }
]

const TrackCard = () => {
  return (
    <div className=' flex-row md:flex  md:mt-10'>
      {
        cards.map((value,index)=>{
          return(
            <div className='md:mx-[80px] px-10 shadow-xl mt-[50px] h-[350px]  w-[250px] md:w-[700px] rounded-2xl ' key={index}>
              <Image src={value.src} alt='image' height={200} width={200} className='rounded-2xl'/>
              <p className='text-gray-500 pt-2'>{value.courseType}</p>
              <h1 className='text-xl font-bold pt-2'>{value.courseName}</h1>
              <div className='flex gap-3 pt-4'>
              <h6>{value.duration}</h6>
              <h6>{value.courses} courses</h6>
              <h6>{value.sales} sales</h6>
              </div>
              <div className='px-6 pt-6 '>
              <Button label='Join Course' secondary />
              </div>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default TrackCard