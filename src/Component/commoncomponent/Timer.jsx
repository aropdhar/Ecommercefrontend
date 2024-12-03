import React from 'react'
import { RxDotsVertical } from 'react-icons/rx'

const Timer = () => {
  return (
    <>
       <div className='flex items-center gap-x-[30px]'>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Days</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'>03</p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>
           
           </div>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Hours</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'>23</p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>
           
           </div>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Minutes</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'>19</p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>
           
           </div>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Seconds</span>

              <p className='font-Inter font-bold text-[32px] leading-[30px]'>56</p>
            
           </div>

        </div> 
    </>
  )
}

export default Timer
