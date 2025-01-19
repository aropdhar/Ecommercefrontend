import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const CustomerService = () => {
    const customerService = [
        {
            id:1,
            icons: <TbTruckDelivery />,
            item1: "FREE AND FAST DELIVERY",
            item2: "Free delivery for all orders over $140"
            
        },
        {
            id:2,
            icons: <RiCustomerServiceFill />,
            item1: "24/7 CUSTOMER SERVICE",
            item2: "Friendly 24/7 customer support"
            
        },
        {
            id:3,
            icons: <MdVerifiedUser />,
            item1: "MONEY BACK GUARANTEE",
            item2: "We reurn money within 30 days"
            
        }
    ]
  return (
    <div className='my-[80px]'>  
        <div className='container'>
        <div className='flex justify-around items-center'>
            {customerService.map((item , index)=>(
                <div className='flex flex-col gap-y-[5px] items-center'>
                    <div className='bg-[rgba(47,46,48,0.11)] flex items-center justify-center p-[10px] rounded-[50%]'>
                       <span className='text-[40px] bg-text_000000 inline-block p-[10px] rounded-[50%] text-white'>{item.icons}</span>
                    </div>
                    <h3 className='text-[20px] font-poppins font-semibold leading-[28px]'>{item.item1}</h3>
                    <p className='text-[14px] font-poppins font-normal leading-[21px]'>{item.item2}</p>
                </div>
            ))

            }
        </div>
        </div>
    </div>
  )
}

export default CustomerService
