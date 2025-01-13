import React from 'react'
import boximg from '../../../assets/box.png'

const Experience = () => {
  return (
    <div className='my-[120px]'>
      <div className='container'>
        <div className='flex items-center py-[82px] px-[60px] bg-text_000000'>
            <div className='w-[50%] flex flex-col gap-y-[32px]'>
               <span className='text-white_color text-[16px] font-poppins leading-[20px] font-semibold'>Categories</span>
               <h1 className='text-white_color text-[48px] font-Inter leading-[60px] tracking-[4%] font-semibold '>Enhance Your Music Experience</h1>
               <div className='flex items-center gap-x-[24px]'>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>05</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Days</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>23</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Hours</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>59</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Minutes</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>59</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Seconds</span>
                  </div>
               </div>
               <button className='bg-button_00FF66 w-[171px] py-[16px] px-[48px] font-poppins font-medium text-[16px] leading-[24px] text-white_color'>Buy Now</button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                 <div className='w-[568px] h-[330px] overflow-hidden imageshadow'>
                   <img className='w-full h-full object-cover' src={boximg} alt={boximg} />
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
