import React from 'react'
import TrackCard from './TrackCard'

const Tracks = () => {
  return (
    <div>
        <div className='items-center  '>
            <h1 className='md:text-4xl font-extrabold flex justify-center text-2xl pt-5 my-5 md:px-[500px]'>Our Tracks</h1>
            <p className='text-gray-400 md:text-xl md:px-[430px] text-sm'>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
        <div>
          <TrackCard />
        </div>
    </div>
  )
}

export default Tracks