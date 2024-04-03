import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[27%] px-16 absolute text-white  bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-lg fa fa-play hover:bg-opacity-80 rounded-lg mx-2'>Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg fa fa-info-circle bg-opacity-50 rounded-lg'>Moreinfo</button>
      </div>
    </div>
  )
}

export default VideoTitle
