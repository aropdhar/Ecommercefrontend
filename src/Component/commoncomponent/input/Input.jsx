import React, { useState } from 'react'

const Input = ({widthfull= false, label, ispassword= false, Name , placeholder , id}) => {
    
  return (
    <div>
      <div className='container flex flex-col gap-y-[8px]'>
         <label className='font-poppins text-[16px] font-normal leading-[24px]' htmlFor="">{label}</label>
         <input type={ispassword ? "password" : "text"} className={widthfull ? "bg-[#F5F5F5] w-[710px] py-[13px] text-black opacity-[0.5] pl-[16px] rounded" : "bg-[#F5F5F5] w-[330px] text-black opacity-[0.5] py-[13px] pl-[16px] rounded"} placeholder={placeholder} id={id} name={Name}/>
      </div>
    </div>
  )
}

export default Input
