import React from 'react'
import men1 from '../../../assets/men1.png'
import men2 from '../../../assets/men2.png'
import men3 from '../../../assets/men3.png'
import { CiTwitter } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Review = () => {
  return (
    <div className='mt-[140px]'>
      <div className='flex items-center justify-between'>

         <div>
             <div className='bg-white_F5F5F5 w-[370px] flex items-center justify-center pt-[39px] rounded'>
                <div className='w-[236px] h-[391px] overflow-hidden'>
                   <img className='w-full h-full object-cover' src={men1} alt={men1} />
                </div>
             </div>
             <h1 className='mt-[32px] mb-[8px] text-[32px] font-Inter font-medium leading-[30px]'>Tom Cruise</h1>
             <span className='mb-[16px] text-[16px] inline-block font-poppins font-normal leading-[24px]'>Founder & Chairman</span>
           <div className='flex items-center gap-x-[16px]'>
               <span className='text-[24px]'><CiTwitter /></span>
               <span className='text-[24px]'> <FaInstagram /></span>
               <span className='text-[24px]'><FaLinkedinIn /></span>
             </div>
         </div>
        

         {/* <div>
             <div className='bg-white_F5F5F5 w-[370px] flex items-center justify-center pt-[39px] rounded'>
                <div className='w-[236px] h-[391px] overflow-hidden'>
                   <img className='w-full h-full object-cover' src={men2} alt={men2} />
                </div>
             </div>
             <h1 className='mt-[32px] mb-[8px] text-[32px] font-Inter font-medium leading-[30px]'>Emma Watson</h1>
             <span className='mb-[16px] text-[16px] inline-block font-poppins font-normal leading-[24px]'>Managing Director</span>
           <div className='flex items-center gap-x-[16px]'>
               <span className='text-[24px]'><CiTwitter /></span>
               <span className='text-[24px]'> <FaInstagram /></span>
               <span className='text-[24px]'><FaLinkedinIn /></span>
             </div>
         </div>

         <div>
             <div className='bg-white_F5F5F5 w-[370px] flex items-center justify-center pt-[39px] rounded'>
                <div className='w-[236px] h-[391px] overflow-hidden'>
                   <img className='w-full h-full object-cover' src={men3} alt={men3} />
                </div>
             </div>
             <h1 className='mt-[32px] mb-[8px] text-[32px] font-Inter font-medium leading-[30px]'>Will Smith</h1>
             <span className='mb-[16px] text-[16px] inline-block font-poppins font-normal leading-[24px]'>Product Designer</span>
           <div className='flex items-center gap-x-[16px]'>
               <span className='text-[24px]'><CiTwitter /></span>
               <span className='text-[24px]'> <FaInstagram /></span>
               <span className='text-[24px]'><FaLinkedinIn /></span>
             </div>
         </div> */}


      </div>
    </div>
  )
}

export default Review
