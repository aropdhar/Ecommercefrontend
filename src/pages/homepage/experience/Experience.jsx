import React, { useEffect, useState } from 'react'
import boximg from '../../../assets/box.png'

const Experience = ({timeoffer}) => {

   const [time , setTime] = useState(timeoffer * 24 * 60 * 60 * 1000 || 0);
      
      useEffect(() => {
       const worker = new Worker(
         new URL("../../../worker/CountDownWorker2.js", import.meta.url)
       );
       worker.postMessage(time);
       worker.onmessage= (e) =>{
         setTime(e.data);
       }
   
     }, []);
      
   
     //  // time format
      
      const formatdate = (milisecond)=>{
         const total_second = parseInt(Math.floor(milisecond / 1000));
         const total_minute = parseInt(Math.floor(total_second / 60));
         const total_hours = parseInt(Math.floor(total_minute / 60));
         const days = parseInt(Math.floor(total_hours / 24));
         const second = parseInt(Math.floor(total_second % 60));
         const minute = parseInt(Math.floor(total_minute % 60));
         const hours = parseInt(Math.floor(total_hours % 60));
   
         return {second , minute , hours , days};
         
      }
   
      const {second , minute , hours , days} = formatdate(time)

  return (
    <div className='my-[120px]'>
      <div className='container'>
        <div className='flex items-center py-[82px] px-[60px] bg-text_000000'>
            <div className='w-[50%] flex flex-col gap-y-[32px]'>
               <span className='text-white_color text-[16px] font-poppins leading-[20px] font-semibold'>Categories</span>
               <h1 className='text-white_color text-[48px] font-Inter leading-[60px] tracking-[4%] font-semibold '>Enhance Your Music Experience</h1>
               <div className='flex items-center gap-x-[24px]'>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>{days}</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Days</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>{hours}</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Hours</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>{minute}</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Minutes</span>
                  </div>
                  <div className='flex w-[62px] h-[62px] flex-col items-center justify-center bg-white_color rounded-[50%]'>
                     <span className='text-[16px] font-poppins font-semibold leading-[20px] inline-block'>{second}</span>
                     <span className='text-[11px] font-poppins font-normal leading-[18px] inline-block'>Seconds</span>
                  </div>
               </div>
               <button className='bg-button_00FF66 w-[171px] py-[16px] px-[48px] font-poppins font-medium text-[16px] leading-[24px] text-white_color'>Buy Now</button>
            </div>
            <div className='w-[50%] flex items-center justify-center'>
                 <div className='w-[568px] h-[330px] s imageshadow'>
                   <img className='w-full h-full object-cover' src={boximg} alt={boximg} />
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
