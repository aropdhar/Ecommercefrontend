import React from 'react'
import { IoIosWarning } from 'react-icons/io'
import { Link } from 'react-router-dom'

const PaymentCancel = () => {
  return (
    //    <!-- component -->
    <div class="bg-gray-100 h-screen">
        <div class="bg-white p-6  md:mx-auto">
            <div class="text-center my-4">
                <span class="text-green-600 text-[65px] mx-auto "><IoIosWarning /></span>
            </div>
            <div class="text-center">
                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancel!</h3>
                <p class="text-gray-600 my-2">Please completing your secure online payment.</p>
                <p> Have a great day!  </p>
                <div class="py-10 text-center">
                    <Link to={'/product'} href="#" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                        GO BACK 
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentCancel
