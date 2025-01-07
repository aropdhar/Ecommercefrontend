import React from 'react'
import { CiStar } from 'react-icons/ci';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';

const Star = ({rating = 2.5}) => {
    const stars = Array.from({length: 5}, (_ , index)=>{
        if(rating >= index + 1){
           return <IoStar key={index} className='text-yellow-500 text-[20px]'/>
        }else if(rating >= index + 0.5){
            return <FaRegStarHalfStroke key={index} className='text-yellow-500 text-[20px]'/>
        }else{
            return <CiStar key={index} className='text-yellow-500 text-[20px]'/>
        }
    });
  return (
    <div className='flex items-center gap-x-[4px]'>{stars}</div>
  )
}

export default Star
