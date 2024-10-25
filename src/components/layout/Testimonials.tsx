import React from 'react'
const feedback =[
    {
        feedback:"Teachings of the great explore of truth and master builder of human happiness.",
        student:"Finlay Kirk",
        skills:"Web Developer"

    },
    {
        feedback:"Guidance that illuminates the path to wisdom and fosters a deeper understanding of life's purpose",
        student:"John Elic",
        skills:"Web design"

    },
    {
        feedback:"Principles that inspire growth, encourage self-discovery, and nurture the pursuit of lasting joy",
        student:"Clara R",
        skills:"UI/UX Design"
    }
]

const Testimonials = () => {
  return (
    <div className='md:flex justify-between gap-4 mt-[50px] md:mt-[100px] px-6'>
        {
          feedback.map((card,index)=>{
            return(
              <div className='flex flex-col shadow-2xl px-9 py-9 rounded-xl sm:w-[5vw] md:w-[25vw] mt-9 ' key={index}>
                <div>
                  <p className='text-gray-500 text-xs md:text-lg'> {card.feedback}</p>
                </div>
                <div >
                  <h4 className='font-bold'>{card.student}</h4>
                  <h4 className='text-gray-600'>{card.skills}</h4>
                </div>
              </div>
            )
          })
        }
  </div>
  )
}
export default Testimonials