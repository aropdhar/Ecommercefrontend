import React from 'react'
import forgetpassword from '../../../assets/forget.png'
import { Link, NavLink } from 'react-router-dom'

const Forgetpassword = () => {
  return (
    <div className='mt-[80px] mb-[140px]'>
      <div className='container'>
         <div className='flex items-center gap-x-[40px]'>
             <div className='w-[600px] h-[600px] overflow-hidden'>
                <img className='w-full h-full object-contain' src={forgetpassword} alt={forgetpassword} />
             </div>
             <div className='flex flex-col gap-y-[30px]'>
               <div className='flex flex-col gap-y-[10px] items-center justify-center'>
                  <h1 className='text-[28px] font-poppins font-medium '>Forget Your Password</h1>
                  <p className='text-center text-[16px] font-Inter w-[480px]'>We get it, stuff happens, just enter your email address below and we'll send you a link to reset your password.</p>
               </div>
               <div className='flex items-start shadow-lg rounded-[20px] p-[20px] flex-col gap-y-[20px]'>
                 <label htmlFor="">Email</label>
                 <input className='w-[450px] border-2 border-black pl-[10px] py-[10px] rounded-[10px]' type="email" placeholder='Enter Your Email' />
                 <button className='w-[450px] rounded-[10px] text-white py-[10px] bg-button_DB4444 mt-[20px]'>Reset Password</button>
               </div>
               <div className='flex items-center justify-center flex-col gap-y-[20px]'>
                  <Link to={'/signup'}>Create Acoount?</Link>
                  <span>Already Have An Account? <NavLink to={'/login'} className="text-blue-500">Login</NavLink></span>
               </div>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Forgetpassword
