import React from 'react'
import mobile from '../../../assets/mobile.png'

const CategoryItem = ({itemData}) => {
  console.log(itemData);
  
  return (
    <div className='w-[175px] hover:bg-button_DB4444 transition-all cursor-pointer h-[145px] my-[80px] border border-text_000000 hover:text-white_color border-opacity-70 flex items-center justify-center rounded-[4px] group'>
      <div className='flex flex-col gap-y-[16px] items-center justify-center'>
       <div>
        <span className='inline-block text-[30px]'>{itemData.img}</span>
       </div>
      
       <h1 className='font-poppins text-[16px] leading-[24px] font-normal'>{itemData.name}</h1>
      </div>
    </div>
  )
}

export default CategoryItem
