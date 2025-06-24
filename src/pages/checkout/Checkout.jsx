import React from 'react'
import desktop from '../../assets/computer.png'
import joystick from '../../assets/joystick.png'
import nagad from '../../assets/Nagad.png'
import bkash from '../../assets/Bkash.png'
import mastercard from '../../assets/Mastercard.png'
import visa from '../../assets/Visa.png'


const Checkout = () => {
  return (
    <div className='mt-[181px] mb-[140px]'>
      <div className='container'>
        <h1 className='font-Inter text-[36px] font-medium leading-[30px]'>Billing Details</h1>
         <div className='flex mt-[48px] items-start justify-between'>
             <div className='flex flex-col gap-y-[32px]'>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">First Name*</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">Company Name</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">Apartment, floor, etc. (optional)</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">Town/City*</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">Phone Number*</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex flex-col gap-y-[8px]'>
                    <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="">Email Address*</label>
                    <input className='w-[470px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" />
                 </div>
                 <div className='flex items-center gap-x-[16px]'>
                    <input className='w-[24px] h-[24px]' type="checkbox" value={"Save this information for faster check-out next time"} />
                    <label htmlFor="">Save this information for faster check-out next time</label>
                 </div>
             </div>
             <div>
                <div className='flex flex-col gap-y-[32px]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-[24px]'>
                            <div className='w-[54px] h-[54px] overflow-hidden'>
                                <img className='w-full h-full object-contain' src={desktop} alt={desktop} />
                            </div>
                            <span>LCD Monitor</span>
                        </div>
                        <span>$650</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-[24px]'>
                             <div className='w-[54px] h-[54px] overflow-hidden'>
                                 <img className='w-full h-full object-contain' src={joystick} alt={joystick} />
                             </div>
                            <span>H1 Gamepad</span>
                        </div>
                        <span>$1100</span>
                    </div>
                </div>
                <div className=' py-[32px] rounded'>
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
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-[16px] my-[34px]'>
                            <input className='w-[24px] h-[24px]' type="radio"/>
                            <label htmlFor="Cash on delivery">Bank</label>
                        </div>
                        <div className='flex items-center gap-x-[8px]'>
                            <div className='w-[42px] h-[28px] overflow-hidden'>
                                <img className='w-full cursor-pointer h-full object-contain' src={bkash} alt={bkash} />
                            </div>
                            <div className='w-[42px] h-[28px] overflow-hidden'>
                                <img className='w-full h-full cursor-pointer object-contain' src={visa} alt={visa} />
                            </div>
                            <div className='w-[42px] h-[28px] overflow-hidden'>
                                <img className='w-full h-full cursor-pointer object-contain' src={mastercard} alt={mastercard} />
                            </div>
                            <div className='w-[42px] h-[28px] overflow-hidden'>
                                <img className='w-full h-full cursor-pointer object-contain' src={nagad} alt={nagad} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-x-[16px]'>
                            <input className='w-[24px] h-[24px]' type="radio"/>
                            <label htmlFor="Cash on delivery">Cash on delivery</label>
                        </div>
                    </div>
                    <div className='flex my-[32px] items-center gap-x-[16px]'>
                        <input className='py-[16px] pl-[24px] w-[300px] rounded border-2 border-black' type="text" placeholder='Coupon Code'/>
                        <button className='bg-button_DB4444 py-[16px] px-[48px] rounded text-white'>Apply Code</button>
                    </div>
                    <div>     
                      <button className='py-[16px] px-[48px] text-[16px] font-poppins inline-block text-start font-medium rounded  text-white bg-button_DB4444 '>Place Order</button>
                    </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  )
}

export default Checkout
