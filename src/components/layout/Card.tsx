import React from 'react'
import { CiDesktop } from 'react-icons/ci'
import { GiNotebook } from 'react-icons/gi'
import { TbCertificate } from 'react-icons/tb'
const paragraphCon="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
const cards=[
    {
        icon:<CiDesktop size={250}/>,
        heading:"Learn the Skills",
        paragraph:paragraphCon
    },
    {
        icon:<GiNotebook size={250}/>,
        heading:"Get Ready for a Career",
        paragraph:paragraphCon
    },
    {
        icon:<TbCertificate size={250}/>,
        heading:"Earn a Certification",
        paragraph:paragraphCon
    }
]

const Card = () => {
  return (
    <div className='flex md:flex-row flex-col bg-purple-900  w-[80%] md:w-[90%] mx-7 mt-7 pt-5 h-[700px] text-white md:h-[200px]  rounded-2xl' >
        {
            cards.map((items,index)=>{
                return(
                    <div className='' key={index}>
                    <div className='flex  '> {items.icon}
                     <div>
                        <div className='gap-y-4 '>
                            <h1 className='md:text-xl font-bold'>{items.heading}</h1>
                            <p className='text-gray-300 text-xs md:text-lg'>{items.paragraph}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )

            })
        }
    </div>
    
    
  )
  
}

export default Card