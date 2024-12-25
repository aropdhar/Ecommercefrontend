import React from 'react'
import mobile from '../../../assets/mobile.png'

const CategoryItem = () => {
  return (
    <div className='w-[175px] hover:bg-button_DB4444 transition-all cursor-pointer h-[145px] my-[80px] border border-text_000000 hover:text-white_color border-opacity-70 flex flex-col items-center justify-center rounded-[4px] group'>
       <div className='w-[56px] h-[56px]'>
          <img src={mobile} alt={mobile} className='w-full h-full object-contain group-hover:white_color'/>
       </div>
       <div>
         <h1>Phones</h1>
       </div>
    </div>
  )
}

export default CategoryItem
