import React, { useEffect } from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import computer from '../../assets/computer.png'
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { removecart , incrementCart , decrementCart , getTotal } from '../../Features/AllSlice/ProductSlice'

const Addtocart = () => {
     
     const dispatch = useDispatch()
     const product = useSelector((state) => state.ProductStore.value)
     const total = useSelector((state) => state.ProductStore)
     
     useEffect(()=>{
      
      dispatch(getTotal())

     },[dispatch , localStorage.getItem('cartItem')])
     


     const handlecart = (cartItem) =>{
       dispatch(removecart(cartItem))
     }
     
     const handleincrement = (item) =>{
       dispatch(incrementCart(item));
     }

     const handledecrement = (item) =>{
      dispatch(decrementCart(item))
     }
   
  return (
    <div className='mb-[84px]'>
      <div className="container">
          <Breadcrum/>
          <div className='flex items-center justify-between shadow-lg mt-[136px]  rounded py-[24px] px-[40px]'>
             <div className='flex flex-1 justify-start'>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Product</h1>
             </div>
             <div className='flex flex-1 justify-center'>
                <h1 className='text-[16px] font-poppins font-normal text-center leading-[24px]'>Price</h1>
             </div>
             <div className='flex flex-1 justify-center'>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Quantity</h1>
             </div>
             <div className='flex flex-1 justify-end'>
                <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>Subtotal</h1>
             </div>
          </div>
          <div className='w-full h-[500px] overflow-y-scroll'> 
               {product.map((item)=>(                  
                  <div className='flex flex-col gap-y-[40px]'>
                     <div className='flex items-center shadow-lg  py-[20px] px-[40px]   justify-between rounded mt-[40px]'>
                        <div className='flex flex-1 justify-start items-center gap-x-[20px]'>
                           <div className='relative w-[54px] h-[54px] overflow-hidden'>
                              <img className='w-full h-full object-cover' src={item.image} alt={computer} />
                              <span className='absolute left-0 top-0 inline-block text-white bg-button_DB4444 rounded-[50%] cursor-pointer' onClick={()=> handlecart(item)}><IoMdClose /></span>
                           </div>
                           <h1>{item.name}</h1>
                        </div>
                        <div className='flex flex-1 justify-center'>
                           <h1>${item.price}</h1>
                        </div>
                        <div className='flex flex-1 justify-center'>
                           <div className='flex items-center border py-[6px] px-[12px] rounded border-gray-300 gap-x-[4px]'>
                              <div>
                                 <input
                                    type="text"
                                    className="w-[25px] text-[18px] font-poppins font-normal"
                                    value={item.cartQuantity}
                                 />
                              </div>
                              <div className='flex flex-col cursor-pointer text-[16px]'>
                                 <span className='inline-block' onClick={()=>handleincrement(item)}><IoIosArrowUp /></span>
                                 <span className='inline-block' onClick={()=>handledecrement(item)}><IoIosArrowDown /></span>
                              </div>

                           </div>
                        </div>
                        <div className='flex flex-1 justify-end'>
                           <h1>${parseInt(item.price.replace(/,/g, "")) * item.cartQuantity}</h1>
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
                    <h1>Discont:</h1>
                    <span>${'0%'}</span>
                </div>
                <div className='flex items-center border-b-2 border-black pb-[16px] justify-between w-[470px] mt-[24px]'>
                     <h1>Quantity:</h1>
                     <span>{total.totalItem}</span>
                </div>
                <div className='flex items-center  pb-[16px] justify-between w-[470px] mt-[24px]'>
                      <h1>SubTotal:</h1>
                      <span>${total.totalAmount}</span>
                </div>
                <button className='py-[16px] px-[48px] text-[16px] font-poppins font-medium rounded ml-[137px] text-white bg-button_DB4444 '>Process to Checkout</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Addtocart
