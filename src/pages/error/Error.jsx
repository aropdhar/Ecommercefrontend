import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Breadcrum/>
      <div className='mt-[160px] mb-[140px] flex flex-col items-center justify-center gap-y-[40px]'>
          <h1 className='text-[110px] font-Inter font-medium leading-[115px]'>404 Not Found</h1>
          <p className='text-[16px] font-poppins font-normal leading-[24px]'>Your visited page not found. You may go home page.</p>
          <NavLink to={'/'} className='bg-button_DB4444 py-[10px] px-[20px] rounded text-white text-[18px]'>Back To Home Page</NavLink>
      </div>
    </div>
  )
}

export default Error
