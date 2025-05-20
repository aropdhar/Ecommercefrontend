import React, { useState } from 'react'
import signup from '../../../assets/login.png'
import { FcGoogle } from 'react-icons/fc'
import { Link, NavLink } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const Signup = () => {

    const [eye , setEye] = useState(false);

  return (
    <div className='mb-[140px] mt-[60px]'>
      <div className='container'>
         <div className='flex items-center gap-x-[129px]'>
             <div className='w-[605px] h-[681px] overflow-hidden'>
                <img className='w-full h-full rounded object-cover' src={signup} alt={signup} />
             </div>
             <div>
                <h1 className='text-[36px] font-Inter font-medium leading-[30px]'>Create an account</h1>
                <p className='mt-[24px] mb-[48px] font-poppins text-[16px] leading-[24px] '>Enter your details below</p>
                <div className='flex flex-col gap-y-[40px]'>
                    <div className='border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[370px]'>
                       <input className='outline-none w-[360px]' type="text" placeholder='Name' />
                    </div>
                    <div className='border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[370px]'>
                        <input className='outline-none w-[360px]' type="text" placeholder='Email or Phone Number'/>
                    </div>
                    <div className='border-b-2 relative border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[370px]'>
                        <input className='outline-none w-[360px]' type={eye ? "text" : "password"} placeholder='Password'/>
                        <span className='absolute right-[5px] cursor-pointer top-[12px]' onClick={()=>setEye(!eye)}>{eye ? <FaEyeSlash /> : <FaEye /> }</span>
                    </div>
                </div>
                <div className='bg-button_DB4444 mt-[40px] flex items-center justify-center py-[16px] rounded text-[16px] text-white cursor-pointer mb-[16px]'>
                    <button >Create Account</button>
                </div>
                <div className='flex items-center justify-center border-2 border-[rgba(0, 0, 0, 0.4)] cursor-pointer rounded py-[16px] gap-x-[16px] mb-[36px]'>
                    <span className='text-[24px]'><FcGoogle /></span>
                    <NavLink>Sign up with Google</NavLink>
                </div>
                <p className='flex items-center justify-center gap-x-[16px] text-[rgba(0,0,0,0.52)]'>Already have account? <NavLink to={"/login"} className={"text-black text-[16px] font-poppins leading-[24px] font-medium"}>Log In</NavLink></p>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Signup
