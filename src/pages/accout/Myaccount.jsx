import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'

const Myaccount = () => {
  return (
    <div className='mb-[140px]'>
      <div className='container'>
         <div className='flex items-center justify-between'>
            <div className='w-[50%]'>
                <Breadcrum/>
            </div>
            <div className='w-[50%] flex items-center justify-end'>
                <h1 className='text-[14px] font-poppins text-text_000000'>Welcome! <span className='text-button_DB4444'>Md Rimel.</span></h1>
            </div>
         </div>
         <div className='flex mt-[80px] items-start gap-x-[180px]'>
            <div className='flex flex-col gap-y-[18px]'>
              <div className='flex flex-col gap-y-[16px]'>
                  <h1 className='font-poppins text-[16px] leading-[16px] font-semibold'>Manage My Account</h1>
                  <ul className='ml-[20px] flex flex-col gap-y-[8px]'>
                    <li className='accountstyle'>My Profile</li>
                    <li className='accountstyle'>Address Book</li>
                    <li className='accountstyle'>My Payment Options</li>
                  </ul>
              </div>
              <div className='flex flex-col gap-y-[16px]'>
                  <h1 className='font-poppins text-[16px] leading-[16px] font-semibold'>My Orders</h1>
                  <ul className='ml-[20px] flex flex-col gap-y-[8px]'>
                    <li className='accountstyle'>My Returns</li>
                    <li className='accountstyle'>My Cancellations</li>
                  </ul>
              </div>
              <div>
                <h1 className='font-poppins text-[16px] leading-[16px] font-semibold'>My WishList</h1>
              </div>
            </div>
            <div className='flex shadow rounded py-[40px] px-[80px] flex-col gap-y-[24px]'>
               <h1 className='text-button_DB4444 text-[20px] font-poppins font-medium leading-[28px]'>Edit Your Profile</h1>
               <div className='flex items-center gap-x-[50px]'>
                  <div className='flex flex-col gap-y-[8px]'>
                     <label htmlFor="">First Name:</label>
                     <input className='w-[330px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Enter Your First Name' />
                  </div>
                  <div className='flex flex-col gap-y-[8px]'>
                    <label htmlFor="">Last Name:</label>
                    <input className='w-[330px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Enter Your Last Name' />
                  </div>
               </div>
               <div className='flex items-center gap-x-[50px]'>
                  <div className='flex flex-col gap-y-[8px]'>
                     <label htmlFor="">Email</label>
                     <input className='w-[330px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Enter Your Email' />
                  </div>
                  <div className='flex flex-col gap-y-[8px]'>
                    <label htmlFor="">Address</label>
                    <input className='w-[330px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Enter Your Address' />
                  </div>
               </div>

               <div>
                 <h1>Password Change</h1>
                 <div className='flex flex-col mt-[8px] items-start gap-y-[16px]'>
                    <input className='w-[710px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Current Password' />
                    <input className='w-[710px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='New Password' />
                    <input className='w-[710px] py-[13px] pl-[16px] rounded bg-[#F5F5F5]' type="text" placeholder='Confirm New Password' />
                 </div>
               </div>

               <div className='flex items-center justify-end gap-x-[16px]'>
                 <button className='text-[16px] font-poppins font-normal leading-[24px]'>Cancel</button>
                 <button className='bg-button_DB4444 text-[16px] font-poppins font-medium leading-[24px] py-[16px] px-[48px] text-white rounded'>Save Change</button>
               </div>
            </div>
         </div>

      </div>
    </div>
  )
}
 
export default Myaccount
