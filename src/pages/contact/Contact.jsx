import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import { MdOutlinePhone } from 'react-icons/md'
import { CiMail } from 'react-icons/ci'
import { useFormik } from 'formik';
import Contactvalidation from '../../validation/contactvalidation/Contactvalidation';

const Contact = () => {

  const intialvalue = {
    name: "",
    email: "",
    number: "",
    message: ""
  }

  const formik = useFormik({
     initialValues: intialvalue,
     validationSchema: Contactvalidation,
     onSubmit: (values , actions) => {
       console.log(values);
       
     },
   });

  return (
    <div>
      <div className='container'>
        <Breadcrum/>
         <div className='mt-[80px] flex items-start gap-x-[30px] mb-[140px]'>
            <div className='shadow-lg py-[42px] px-[35px] rounded'>
                <div className='flex items-center gap-x-[16px]'>
                    <span className='bg-button_DB4444 p-[8px] rounded-[50%] text-white text-[16px]'><MdOutlinePhone /></span>
                    <h2 className='font-poppins text-[16px] font-medium leading-[24px]'>Call To Us</h2>
                </div>
                <div className='flex flex-col mt-[32px] gap-y-[16px] mb-[32px] pb-[32px] border-b-2 border-black border-opacity-[0.2]'>
                    <span>We are available 24/7, 7 days a week.</span>
                    <span>Phone: +8801611112222</span>
                </div>
              <div >
                <div className='flex items-center gap-x-[16px]'>
                    <span className='bg-button_DB4444 p-[8px] rounded-[50%] text-white text-[18px]'><CiMail /></span>
                    <h2 className='font-poppins text-[16px] font-medium leading-[24px]'>Write To US</h2>
                </div>
                <div className='flex flex-col mt-[24px] gap-y-[16px]'>
                    <p className='text-[14px] font-poppins font-normal leading-[21px]'>Fill out our form and we will contact <br /> you within 24 hours.</p>
                    <span className='text-[14px] font-poppins font-normal leading-[21px]'>Emails: customer@exclusive.com</span>
                    <span className='text-[14px] w-[250px] font-poppins font-normal leading-[21px]'>Emails: support@exclusive.com</span>
                </div>
              </div>
            </div>
            <div className='shadow-lg rounded py-[40px] px-[32px]'>
               <form onSubmit={formik.handleSubmit}>
                  <div className='flex items-center gap-x-[16px]'>
                    <div className='flex flex-col gap-y-[10px]'>
                      <input className='bg-[#F5F5F5] w-[235px] rounded py-[13px] pl-[16px] text-[16px] font-normal leading-[24px] text-button_DB4444 opacity-[0.5]'
                       id="name"
                       name="name"
                       type="text" 
                       placeholder='Your Name'
                       onChange={formik.handleChange}
                       value={formik.values.name}
                       />
                       {formik.touched.name && formik.errors.name ? (
                          <div className='text-red'>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className='flex flex-col gap-y-[10px]'>
                      <input className='bg-[#F5F5F5] w-[235px] rounded py-[13px] pl-[16px] text-[16px] font-normal leading-[24px] text-button_DB4444 opacity-[0.5]'
                       id="email"
                       name="email" 
                       type="email" 
                       placeholder='Your Email'
                       onChange={formik.handleChange}
                       value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className='text-red'>{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className='flex flex-col gap-y-[10px]'>
                      <input className='bg-[#F5F5F5] w-[235px] rounded py-[13px] pl-[16px] text-[16px] font-normal leading-[24px] text-button_DB4444 opacity-[0.5]'
                        id="number"
                        name="number"
                        type="text"
                        placeholder='Your Number'
                        onChange={formik.handleChange}
                        value={formik.values.number}
                       />
                       {formik.touched.number && formik.errors.number ? (
                          <div className='text-red'>{formik.errors.number}</div>
                        ) : null}
                    </div>
                  </div>
                  <div className='flex flex-col gap-y-[10px]'>
                    <textarea className='mt-[32px] w-[737px] rounded h-[207px] bg-[#F5F5F5] pt-[13px] pl-[16px] opacity-[0.5]'
                      id="message"
                      name="message"
                      placeholder='Your Message' 
                      onChange={formik.handleChange}
                      value={formik.values.message}
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (
                      <div className='text-red'>{formik.errors.message}</div>
                    ) : null}
                  </div>
                  <div className='flex items-end justify-end mt-[32px]'>
                    <button  type="submit" className='bg-button_DB4444 transition-all duration-300 hover:opacity-[0.8] py-[16px] px-[48px] text-white rounded text-[16px] font-poppins font-medium leading-[24px]'>Send Message</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
