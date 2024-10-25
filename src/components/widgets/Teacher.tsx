import Image from 'next/image'
import React from 'react'
const teachers=[
    {
        src:"https://images.pexels.com/photos/8197497/pexels-photo-8197497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tutor:"Tracy Watson",
        college:"Professor@George Brown College",
        para:"The professor for guidance of physics Engineering",
        sub:"Engineering Physics"
    },
    {
        src:"https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tutor:"Ema Ellic",
        college:"Professor@George Brown College",
        para:"The professor for guidance of physics Engineering",
        sub:"Engineering Physics"
    },
    {
        src:"https://images.pexels.com/photos/3764402/pexels-photo-3764402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tutor:"Tracy Watson",
        college:"Professor@George Brown College",
        para:"The professor for guidance of physics Engineering",
        sub:"Engineering Physics"
    },
]
const Teacher = () => {
  return (
    <div className='md:mt-[200px] mt-[100px]'>
        <div className='md:px-[400px]'>
            <h1 className='md:px-[80px] px-[50px] md:text-5xl font-bold text-2xl flex '>Our Tracks</h1>
            <p className='text-gray-600 text-xs  md:text-lg px-7 flex justify-center' >Lorem Ipsum is simply dummy text of printing</p>
        </div>
    <div className='md:flex gap-7  mt-6 md:mt-[80px] px-6'>
        {
            teachers.map((card,index)=>{
                return(
                    <div className='shadow-2xl py-9 px-[20px]  md:mx-7 rounded-2xl w-[100%] md:w-[25vw]' key={index}>
                        <Image src={card.src} alt='image' height={300} width={300} />
                        <h2 className='text-xl font-bold pt-6 '>{card.tutor}</h2>
                        <h4 className='text-gray-500 text-xs md:text-lg pt-3'>{card.college}</h4>
                        <p className='text-gray-500 text-xs md:text-lg pt-10'>{card.para}</p>
                        <h3 className='flex justify-center pt-5 font-bold text-orange-500 md:text-xl'>{card.sub}</h3>
                    </div>
                    
                )
            })
        }
    </div>
    </div>
  )
}

export default Teacher