import React, { useState } from 'react'
import signup from '../../../assets/login.png'
import { FcGoogle } from 'react-icons/fc'
import { Link, NavLink } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useFormik } from 'formik';
import Signupvalidation from '../../../validation/signupvalidation/Signupvalidation'
import { ErrorToast, SuccessToast } from '../../../utils/toast'
import { AxiosInstance } from '../../../Component/commoncomponent/axios/AxiosInstance'
import { ThreeDots } from 'react-loader-spinner'
import ThreeDotsLoader from '../../../utils/threedots/ThreeDotsLoader'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    
    const navigate = useNavigate();
    const [eye , setEye] = useState(false);
    const [confirmeye , setConfirmeye] = useState(false);
    const [loading , setLoading] = useState(false)
    
    
    

    const intialvalue = {
        Firstname: "",
        Email_Address: "",
        password: "",
        confirm_password: "",
        agree: false
    }

    const formik = useFormik({
     initialValues: intialvalue,
     validationSchema: Signupvalidation,
     onSubmit: async(values , actions) => {
       setLoading(true)       
       try {
        
        const {Firstname , Email_Address , password , confirm_password , agree} = values;
        
        if(password !== confirm_password){
          ErrorToast("Passwor Is Not Match");
        }else{
         const response = await AxiosInstance.post('/registration',{
              FirstName: Firstname,
              Email_Adress: Email_Address,
              Password: password
          })

          const {data , statusText} = response;
                  
          if(statusText.toLocaleLowerCase() == "OK".toLocaleLowerCase()){
            SuccessToast(`Registration SuccessFully!!Please Check Email${Email_Address}`);
            setLoading(false)
            actions.resetForm()
            // setInterval(() => {
            //   window.open("https://mail.google.com", "_blank");  
            // }, 2000);
          }
          
        }

       } catch (error) {

        const {data , statusText} = error.response;
        
        if(statusText == "Bad Request"){
           ErrorToast(data.message)
        }
        
       }finally{
          setLoading(false)
          actions.resetForm()
        }
     },
   });

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
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col gap-y-[40px]'>
                        <div className='flex flex-col gap-y-[10px] w-[370px]'>
                             <input className='outline-none border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[360px]'
                                id="Firstname"
                                name="Firstname" 
                                type="text" 
                                placeholder='FirstName' 
                                onChange={formik.handleChange}
                                value={formik.values.Firstname}
                             />
                              {formik.touched.Firstname && formik.errors.Firstname ? (
                                <div className='text-red'>{formik.errors.Firstname}</div>
                              ) : null}
                        </div>
                        <div className='flex flex-col gap-y-[10px] w-[370px]'>
                            <input className='outline-none border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[360px]'
                                id="Email_Address"
                                name="Email_Address" 
                                type="text" 
                                placeholder='Email or Phone Number'
                                onChange={formik.handleChange}
                                value={formik.values.Email_Address}
                            />
                             {formik.touched.Email_Address && formik.errors.Email_Address ? (
                                <div className='text-red'>{formik.errors.Email_Address}</div>
                             ) : null}
                        </div>
                        <div className='flex flex-col gap-y-[10px] relative  w-[370px]'>
                            <input className='outline-none border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[360px]' 
                                id="password"
                                name="password"
                                type={eye ? "text" : "password"} 
                                placeholder='Password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <span className='absolute right-[5px] cursor-pointer top-[12px]' onClick={()=>setEye(!eye)}>{eye ? <FaEyeSlash /> : <FaEye /> }</span>
                             {formik.touched.password && formik.errors.password ? (
                                <div className='text-red'>{formik.errors.password}</div>
                             ) : null}
                        </div>
                        <div className='flex flex-col gap-y-[10px] relative  w-[370px]'>
                            <input className='outline-none border-b-2 border-[rgba(0, 0, 0, 0.1)] py-[8px] w-[360px]' 
                                id="confirm_password"
                                name="confirm_password"
                                type={confirmeye ? "text" : "password"} 
                                placeholder='Confirm Password'
                                onChange={formik.handleChange}
                                value={formik.values.confirm_password}
                            />
                            <span className='absolute right-[5px] cursor-pointer top-[12px]' onClick={()=>setConfirmeye(!confirmeye)}>{confirmeye ? <FaEyeSlash /> : <FaEye /> }</span>
                             {formik.touched.confirm_password && formik.errors.confirm_password ? (
                                <div className='text-red'>{formik.errors.confirm_password}</div>
                             ) : null}
                        </div>
                        <div class="col-span-6">
                          <label for="MarketingAccept" class="flex gap-4">
                            <input
                              id="agree"
                              name="agree"
                              type="checkbox"
                              class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                              onChange={formik.handleChange}
                              value={formik.values.agree}
                            />

                            <span class="text-sm w-[360px] text-gray-700">
                              I want to receive emails about events, product updates and
                              company announcements.
                            </span>
                          </label>
                        </div>
                    </div>
                      {loading ?

                        <ThreeDotsLoader/>

                      :

                      <div className='bg-button_DB4444 mt-[40px] flex items-center justify-center py-[16px] rounded text-[16px] text-white cursor-pointer mb-[16px]'>
                          <button type="submit">Create Account</button>
                      </div>
                      
                      }
                   
                </form>
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
