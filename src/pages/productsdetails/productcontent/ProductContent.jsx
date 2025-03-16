import React from 'react'
import Star from '../../../Component/commoncomponent/star/Star'

const ProductContent = () => {
  return (
    <>
      <div className='flex flex-col gap-y-[16px]'>
        <h1 className='text-text_000000 font-Inter font-bold text-[24px] leading-[24px] '>Havic HV G-92 Gamepad</h1>
          <div className='flex items-center gap-x-[10px]'>
            <Star />
            <span className='inline-block text-text_000000 opacity-[0.5]'>{`(${150} Reviews)`}</span>
            <span className='instockunderline pl-[10px] text-button_DB4444'>In Stock</span>
          </div>
        <span className='text-text_000000 font-Inter font-normal text-[24px] leading-[24px] text-justify'>{`${'$120'}`}</span>
        <p className='text-text_000000 font-poppins font-normal text-[16px] mt-[8px] leading-[24px] w-[373px] text-justify border-b-[2px] border-b-gray-300 pb-[24px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
      </div>
      {/* color and size  */}
      <div className='mt-[24px]'>
         <div className='flex items-center gap-x-2'>
            <h1 className='text-[20px] font-Inter font-normal leading-[24px]'>Colors:</h1>
            <div className='flex items-center gap-x-[10px]'>
              <span className='w-[20px] h-[20px] bg-button_DB4444 rounded-[50%] inline-block cursor-pointer'></span>
              <span className='w-[20px] h-[20px] bg-button_DB4444 rounded-[50%] inline-block cursor-pointer'></span>
            </div>
         </div>
      </div>
    </>

  )
}

export default ProductContent
