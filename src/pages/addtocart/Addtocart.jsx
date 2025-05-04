import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import computer from '../../assets/computer.png'
import { IoMdClose } from 'react-icons/io'

const Addtocart = () => {
  return (
    <div className='mb-[84px]'>
      <div className="container">
          <Breadcrum/>
          <div className='flex-1 flex items-center justify-between shadow-lg mt-[136px]  rounded py-[24px] px-[40px]'>
             <div>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Product</h1>
             </div>
             <div>
                <h1 className='text-[16px] font-poppins font-normal text-center leading-[24px]'>Price</h1>
             </div>
             <div>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Quantity</h1>
             </div>
             <div>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Subtotal</h1>
             </div>
          </div>
          <div className='w-full h-[500px] overflow-y-scroll'> 
               {[...Array(20)].map(()=>(                  
                  <div className='flex flex-col gap-y-[40px]'>
                     <div className='flex items-center shadow-lg  py-[24px] px-[20px]   justify-between rounded mt-[40px]'>
                        <div className='flex items-center gap-x-[20px]'>
                           <div className='relative'>
                              <img src={computer} alt={computer} />
                              <span className='absolute left-[-5px] top-[-5px] inline-block text-white bg-button_DB4444 rounded-[50%] cursor-pointer'><IoMdClose /></span>
                           </div>
                           <h1>LCD Monitor</h1>
                        </div>
                        <div>
                           <h1>$650</h1>
                        </div>
                        <div>
                           <input
                              type="number"
                              className="w-16 px-2 py-1 border rounded text-center appearance-none"
                              min="1"
                              max="99"
                           />
                        </div>
                        <div>
                           <h1>$650</h1>
                        </div>
                     </div>
                  </div>
               ))
               }
          </div>
          
          <div className='mt-[24px] flex items-center justify-between'>
            <button className='border-2 border-gray-400 rounded py-[16px] px-[46px] text-[16px] font-poppins font-medium leading-[24px]'>Return To Shop</button>
            <button className='border-2 border-gray-400 rounded py-[16px] px-[46px] text-[16px] font-poppins font-medium leading-[24px]'>Update Cart</button>
          </div>

          <div className='flex items-start justify-between mt-[80px]'>
            <div className='flex items-center gap-x-[16px]'>
                <input className='py-[16px] pl-[24px] w-[300px] rounded border-2 border-black' type="text" placeholder='Coupon Code'/>
                <button className='bg-button_DB4444 py-[16px] px-[48px] rounded text-white'>Apply Code</button>
            </div>
            <div className='border-2 border-black py-[32px] px-[24px] rounded'>
                <h1 className='text-[20px] font-poppins font-medium leading-[28px]'>Cart Total</h1>
                <div className='flex items-center border-b-2 border-black pb-[16px] justify-between w-[470px] mt-[24px]'>
                    <h1>Subtotal:</h1>
                    <span>$1750</span>
                </div>
                <div className='flex items-center border-b-2 border-black pb-[16px] justify-between w-[470px] mt-[24px]'>
                     <h1>Shipping:</h1>
                     <span>Free</span>
                </div>
                <div className='flex items-center  pb-[16px] justify-between w-[470px] mt-[24px]'>
                      <h1>Total:</h1>
                      <span>$1750</span>
                </div>
                <button className='py-[16px] px-[48px] text-[16px] font-poppins font-medium rounded ml-[137px] text-white bg-button_DB4444 '>Process to Checkout</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Addtocart
