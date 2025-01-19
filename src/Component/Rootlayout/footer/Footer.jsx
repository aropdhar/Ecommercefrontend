import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import Qrcode1 from '../../../assets/Qrcode1.png'
import GooglePlay from '../../../assets/GooglePlay.png'
import appstore from '../../../assets/appstore.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { CiTwitter } from 'react-icons/ci'
import copyright from '../../../assets/Group.png'

const Footer = () => {
  return (
    <div className='bg-text_000000 pt-[80px] pb-[4px]'>
       <div className='container'>
          <div className='flex items-start justify-between'>

            <div className='flex flex-col gap-y-[24px]'>
                <h1 className='text-[20px] text-white_color leading-[28px] font-poppins font-semibold'>Exclusive</h1>
                <div className='flex flex-col gap-y-[24px]'>
                    <h3 className='text-[16px] text-white_color leading-[28px] font-poppins font-medium'>Subscribe</h3>
                    <p className='text-[16px] text-white_color leading-[28px] font-poppins font-normal'>Get 10% off your first order</p>
                    <div className='relative flex items-center'>
                        <input className='w-[217px] bg-transparent border-2 border-white_color p-[10px] rounded-[4px] relative' type="text" placeholder='Enter Your Email'/>
                        <span className='inline-block text-white_color text-[24px] absolute left-[84%] top-[13px] cursor-pointer'><AiOutlineSend /></span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-[24px]'>
               <h1 className='text-[20px] text-white_color leading-[28px] font-poppins font-semibold'>Support</h1>
               <div className='flex flex-col gap-y-[10px]'>
                 <p className='text-white_color text-[16px] font-normal leading-[24px] w-[175px]'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                 <p className='text-white_color text-[16px] font-normal leading-[24px]'>exclusive@gmail.com</p>
                 <p className='text-white_color text-[16px] font-normal leading-[24px]'>+88015-88888-9999</p>
               </div>
            </div>

            <div className='flex flex-col gap-y-[24px]'>
               <h1 className='text-[20px] text-white_color leading-[28px] font-poppins font-semibold'>Account</h1>
               <div className='flex flex-col gap-y-[16px] '>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">My Account</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">Login / Register</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">Cart</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]'  href="#">Wishlist</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">Shop</a>
               </div>
            </div>

            <div className='flex flex-col gap-y-[24px]'>
               <h1 className='text-[20px] text-white_color leading-[28px] font-poppins font-semibold'>Quick Link</h1>
               <div className='flex flex-col gap-y-[16px] '>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">Privacy Policy</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">Terms Of Use</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]' href="#">FAQ</a>
                 <a className='text-white_color text-[16px] font-normal leading-[24px]'  href="#">Contact</a>
               </div>
            </div>
            
            <div className='flex flex-col gap-y-[24px]'>
                <h1 className='text-[20px] text-white_color leading-[28px] font-poppins font-semibold'>Download App</h1>
                <div className='flex flex-col gap-y-[10px]'>
                    <p className='text-[16px] text-white_color leading-[28px] font-poppins font-normal'>Save $3 with App New User Only</p>
                    
                    <div className='flex items-center  gap-x-[5px]'>
                      <img src={Qrcode1} alt={Qrcode1} />
                        <div className='flex flex-col cursor-pointer gap-y-[5px]'>
                          <img src={GooglePlay} alt={GooglePlay} />
                          <img src={appstore} alt={appstore} />
                        </div>
                    </div>
                    <div className='flex items-center text-white_color mt-[12px] gap-x-[10px] text-[24px] cursor-pointer'>
                      <FaFacebookF />
                      <CiTwitter />
                      <FaInstagram />
                      <FaLinkedinIn />
                    </div>

                </div>
                
            </div>

          </div>

          <div className='flex items-center justify-center gap-x-[10px] mt-[30px]'>
             <img className='w-[20px] h-[20px]' src={copyright} alt={copyright}/>
             <p className='text-white_color text-[16px] leading-[24px] font-normal font-poppins'>Copyright Rimel 2024. All right reserved</p>
          </div>
       </div>
    </div>
  )
}

export default Footer
