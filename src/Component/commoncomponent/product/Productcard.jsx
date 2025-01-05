import React from 'react'
import { CiHeart, CiStar } from 'react-icons/ci'
import { FiEye } from 'react-icons/fi'
import joystickimg from '../../../assets/joystick.png'
import { IoStar } from 'react-icons/io5'



const Productcard = () => {
  return (
    <div className='mt-[34px]'>
      <div className='w-full'>
         <div className='bg-white_F5F5F5 relative px-[12px] pt-[12px] pb-[49px] cursor-pointer group'>

         <div className='flex items-start justify-between '>
            <span className='bg-[red] inline-block rounded-[4px] py-[4px] px-[12px] text-white_color font-normal font-poppins text-[12px]'>-40%</span>

            <div className='flex flex-col gap-y-[8px]'>
                <span className='w-[34px] h-[34px] bg-white_color text-[24px] text-text_000000 rounded-full flex justify-center hover:bg-button_DB4444 hover:text-white_color transition-all items-center cursor-pointer'>
                  <CiHeart />
                </span>
                <span className='w-[34px] h-[34px] bg-white_color text-[24px] text-text_000000 rounded-full flex justify-center items-center cursor-pointer hover:bg-button_DB4444 hover:text-white_color transition-all'>
                  <FiEye />
                </span>
            </div> 
        </div>
        
        <div className='flex justify-center items-center'>
          <div className='w-[172px] h-[152px]'>
            <img src={joystickimg} alt={joystickimg} className='w-full h-full object-contain'/>
          </div>
        </div>
         
          <div className="opacity-0  w-full h-[41px] bg-text_000000  text-white_color absolute left-0 bottom-0 flex  justify-center items-center cursor-pointer font-poppins text-[16px] font-normal leading-[24px] group-hover:opacity-100 transition-all">
            <h3>Add To Cart</h3>
          </div>
      </div>
      <div className='mt-[8px] flex flex-col gap-2 cursor-pointer'>
        <h2 className='text-[16px] font-poppins font-normal  leading-[24px]'>HAVIT HV-G92 Gamepad</h2>
        <div className='flex items-center gap-[12px]'>
            <span className='text-button_DB4444 font-poppins text-[16px] font-normal inline-block leading-[24px]'>$120</span>
            <span className='line-through text-text_000000 opacity-50 font-poppins text-[16px] font-normal inline-block leading-[24px]'>$160</span>
        </div>
        <div className='flex items-center gap-[4px]'>
          {[...new Array(5)].map((_ ,index)=>(
             <span className='text-yellow-500'>
              <IoStar/>
             </span>
          ))

          }
          <h3 className='text-button_DB4444 font-poppins text-[16px] font-normal inline-block leading-[24px]'>{`(${[...new Array(5)].length})`}</h3>
           
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Productcard
