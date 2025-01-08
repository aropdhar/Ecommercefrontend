import React, { useEffect, useState } from 'react'
import { RxDotsVertical } from 'react-icons/rx'

const Timer = ({timeofOffer}) => {
   const [time , setTime] = useState(timeofOffer * 24 * 60 * 60 * 1000 || 0);
   
   useEffect(() => {
    const worker = new Worker(
      new URL("../../../CountDownWorker.js", import.meta.url)
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
    <>
       <div className='flex items-center gap-x-[30px]'>

          <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Days</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'> {days < 10 ? `0${days}` : days} </p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>
           
          </div>

          <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Hours</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'>{hours}</p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>           
          </div>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Minutes</span>
              <div className='flex items-center gap-[12px]'>
                <p className='font-Inter font-bold text-[32px] leading-[30px]'>{minute}</p>
                <span className='text-[25px] font-semibold block text-red'> <RxDotsVertical /></span>
              </div>
           
           </div>

           <div className='flex flex-col items-start gap-y-[8px]'>
              <span className='font-poppins font-medium text-[12px] leading-[18px] text-text_000000'>Seconds</span>
              <p className='font-Inter font-bold text-[32px] leading-[30px]'>{second}</p>
           </div>

        </div> 
    </>
  )
}

export default Timer
