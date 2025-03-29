import React, { useState } from 'react'
import image from '../../../assets/login.png'
import { NavLink } from 'react-router-dom'
import video from '../../../assets/loginvideo.gif'
import { useFormik } from 'formik';
import Loginvalidation from '../../../validation/loginvalidation/Loginvalidation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const [eye , setEye] = useState(false);

    const initialvalue = {
        email: '',
        password: ''
      }
   
    const formik = useFormik({
        initialValues: initialvalue,
        validationSchema: Loginvalidation,
        onSubmit: (values , actions)   => {
          console.log(values);
        },
      });
  return (
    <div className='pt-[60px] pb-[140px]'>
        <div className='container'>
            <div className='flex items-center gap-x-[129px]'>
                <div className='w-[605px] h-[581px]'>
                    <img className='w-full h-full object-cover' src={video} alt={video} />
                </div>
                <div className='flex flex-col items-start gap-y-[24px]'>
                    <h1 className='text-[36px] font-medium leading-[30px] font-Inter'>Log In to Exclusive</h1>
                    <p className='text-[16px] font-normal leading-[24px] font-poppins'>Enter Your Details Below</p>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col items-start gap-y-[40px]'>
                        <div>
                            <input
                                id="email"
                                name="email"
                                className='bg-white pr-[10px] outline-none py-[8px]  w-[350px] border-b-2 border-b-black' 
                                type="email"
                                placeholder='Email or Phone Number'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='text-red'>{formik.errors.email}</div>
                            ) : null}
                            
                        </div>
                        <div className='relative'>
                        <input 
                                id="password"
                                name="password" 
                                className='bg-white pr-[10px] outline-none py-[8px]  w-[350px] border-b-2 border-b-black'
                                type={eye ? "text" : "password"} 
                                placeholder='Enter Your Password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className='text-red'>{formik.errors.password}</div>
                            ) : null}
                            
                            <span className='inline-block absolute right-0 top-[12px] -translate-x-1/2 cursor-pointer' onClick={()=>setEye(!eye)}>{eye ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>

                    {/* button section */}

                        <div className='flex items-center gap-x-[87px]'>
                            <button type="submit" className='bg-button_DB4444 py-[16px] px-[48px] rounded text-white font-poppins text-[16px] font-medium leading-[24px]'>Login</button>
                            <NavLink className='font-poppins text-[16px] font-normal leading-[24px]'>Forget Password</NavLink>
                        </div>
                    </div> 
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
