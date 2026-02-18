import React, { useState } from 'react'
import desktop from '../../assets/computer.png'
import joystick from '../../assets/joystick.png'
import nagad from '../../assets/Nagad.png'
import bkash from '../../assets/Bkash.png'
import mastercard from '../../assets/Mastercard.png'
import visa from '../../assets/Visa.png'
import { useFormik } from 'formik';
import { useGetUserWiseCartQuery } from '../../Features/Api/exclusiveApi'

const Checkout = () => {

  const [payment, setPayment] = useState("bank");
  const { data, error, isLoading } = useGetUserWiseCartQuery();
  console.log(data?.data?.cart);

  const checkitem = data?.data?.cart?.reduce((initialvalue , item)=>{
    initialvalue.user = item.user;
    return initialvalue

  },{user: {}}) 
  
//   localStorage.setItem('users' , JSON.stringify(data?.data?.cart?.user));
//   const userInfo = localStorage.getItem('users');
//   console.log(userInfo);
  
  

  const initialvalue = {
    firstname: checkitem?.user?.FirstName,
    lastname: 'Deo',
    email: checkitem?.user?.Email_Adress,
    number: '01700000000',
    address1: 'Dhaka,Bangladesh',
    address2: 'Dhaka,Bangladesh',
    city: 'Dhaka',
    district: 'Dhaka',
    postcode: '1204',
    paymentMethod: 'Online'
  }
  
  
  
  

    const formik = useFormik({
     initialValues: initialvalue,
     onSubmit: values => {
       console.log(values);
     },
   });
   
   const handlefocus = (e) =>{
      e.target.value = ""
   }

  return (
    <div className='mt-[181px] mb-[140px]'>
      <div className='container'>
            <h1 className='font-Inter text-[36px] font-medium leading-[30px]'>Billing Details</h1>
            <div className='flex mt-[48px] items-start justify-between'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-wrap gap-3'>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="name">First Name*</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="firstname" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} placeholder='firstname' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="company">Last Name</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="lastname" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} placeholder='lastname' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="apart">Email Address</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='email' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="city">Phone Number</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="number" id="number" name="number" onChange={formik.handleChange} value={formik.values.number} placeholder='number' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="phone">Address 1</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="address1" name="address1" onChange={formik.handleChange} value={formik.values.address1} placeholder='address1' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="email">Address 2</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="address2" name="address2" onChange={formik.handleChange} value={formik.values.address2} placeholder='address2' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="email">City</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="city" name="city" onChange={formik.handleChange} value={formik.values.city} placeholder='city' onFocusCapture={handlefocus} />
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="email">District</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="text" id="district" name="district" onChange={formik.handleChange} value={formik.values.district} placeholder='district' onFocusCapture={handlefocus}/>
                        </div>
                        <div className='flex flex-col gap-y-[8px]'>
                            <label className='text-[16px] font-poppins font-normal leading-[24px] text-button_DB4444 opacity-[0.5]' htmlFor="email">Post Code</label>
                            <input className='w-[345px] bg-[#F5F5F5] rounded py-[10px] pl-[10px]' type="number" id="postcode" name="postcode" onChange={formik.handleChange} value={formik.values.postcode} placeholder='postcode' onFocusCapture={handlefocus}/>
                        </div>
                        
                    </div>
                    <div className='flex mt-5 items-center gap-x-[16px]'>
                        <input className='w-[24px] h-[24px]' type="checkbox" value={"Save this information for faster check-out next time"} />
                        <label htmlFor="check">Save this information for faster check-out next time</label>
                    </div>
                    <button type='submit'>submit</button>
                </form>
                <div>
                    <div className='h-[180px] overflow-y-scroll flex flex-col gap-y-7'>
                        {data?.data?.cart.map((item , index)=>(
                            <>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-x-[24px]'>
                                        <div className='w-[54px] h-[54px] overflow-hidden'>
                                            <img className='w-full h-full object-contain' src={item?.product?.image} alt={item?.product?.image} />
                                        </div>
                                        <span>{item?.product?.name}</span>
                                    </div>
                                    <span>{item?.product?.price}</span>
                                </div>
                            </>
                        ))
                        }
                        
                    </div>
                    
                    <div className=' py-[32px] rounded'>
                        <div className='flex items-center border-b-2 border-black pb-[16px] justify-between w-[470px] mt-[24px]'>
                            <h1>Quantity:</h1>
                            <span>{data?.data?.totalquantity}</span>
                        </div>
                        <div className='flex items-center border-b-2 border-black pb-[16px] justify-between w-[470px] mt-[24px]'>
                            <h1>Shipping:</h1>
                            <span>Free</span>
                        </div>
                        <div className='flex items-center  pb-[16px] justify-between w-[470px] mt-[24px]'>
                            <h1>SubTotal:</h1>
                            <span>{data?.data?.totalprice}</span>
                        </div>
                        {/* bank statement  */}
                        <div className="space-y-4">
                        {/* BANK */}
                            <div onClick={() => formik.setFieldValue("paymentMethod", "Online")} className={`flex items-center justify-between p-4 rounded-lg cursor-pointer border ${formik.values.paymentMethod === "Online" ? "border-black" : "border-gray-300"}`}>
                                <div className="flex items-center gap-x-4">
                                    <input type="radio" name="paymentMethod" value="Online" checked={formik.values.paymentMethod === "Online"}  onChange={() => formik.setFieldValue("paymentMethod", "Online")} className='cursor-pointer'/>
                                    <label>Online</label>
                                </div>

                                <div className="flex items-center gap-x-2">
                                <img className="w-[42px] h-[28px] object-contain" src={bkash} />
                                <img className="w-[42px] h-[28px] object-contain" src={visa} />
                                <img className="w-[42px] h-[28px] object-contain" src={mastercard} />
                                <img className="w-[42px] h-[28px] object-contain" src={nagad} />
                                </div>
                            </div>

                            {/* CASH ON DELIVERY */}
                            <div  onClick={() => formik.setFieldValue("paymentMethod", "cash")}  className={`flex items-center p-4 rounded-lg cursor-pointer border
                            ${formik.values.paymentMethod === "cash" ? "border-black" : "border-gray-300"}`}>
                                <input type="radio" name="paymentMethod" value="cash" checked={formik.values.paymentMethod === "cash"} onChange={() => formik.setFieldValue("paymentMethod", "cash")} className='cursor-pointer'/>
                                <label className="ml-4">Cash on delivery</label>
                            </div>
                        </div>
                        <div className='flex my-[32px] items-center gap-x-[16px]'>
                            <input className='py-[16px] pl-[24px] w-[300px] rounded border-2 border-black' type="text" placeholder='Coupon Code'/>
                            <button className='bg-button_DB4444 py-[16px] px-[30px] rounded text-white'>Apply Code</button>
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
