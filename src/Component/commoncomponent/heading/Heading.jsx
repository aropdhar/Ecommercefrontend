import React from 'react'

const Heading = ({title , description}) => {
  return (
    <div className='flex flex-col gap-y-[24px]'>
       <div className='flex items-center gap-x-[16px]'>
           <span className='w-[20px] h-[40px] block bg-button_DB4444'></span>
           <span className='text-[16px] font-poppins font-medium leading-[20px]'>{title ? title : "Today’s"}</span>
       </div>
       <div>
          <h1 className='font-Inter font-semibold text-[36px] leading-[48px]'>{description ? description : "Flash Sales"}</h1>
       </div>
    </div>
  )
}

export default Heading
