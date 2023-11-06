import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({customerName, rating, feedback, imgURL, index}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="customer photo" className='rounded-full w-24 h-24 object-cover' />
      <h3 className='mt-4 text-2xl text-center justify-center font-bold font-montserrat'>{customerName}</h3>
      <p className='mt-4 max-w-sm text-center info-text'>"{feedback}"</p>
      <div className='mt-3 flex justify-center items-center gap-1.5'>
        <img src={star} alt="star" width={24} height={24} className='object-contain m-0'/>
        <p className='text-xl font-montserrat font-medium text-slate-gray'>({rating})</p>
      </div>
    </div>
  )
}

export default ReviewCard