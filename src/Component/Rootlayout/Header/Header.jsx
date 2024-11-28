import React from 'react'



const Header = () => {
  return (
    <>
      <div className='bg-text_000000 py-[12px]'>
          <div className='container'>
            <div className='flex justify-between items-center'>
                <div></div>
                <div className='text-white_FAFAFA font-normal font-poppins text-[15px] leading-[21px]'>
                  <h2>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                </div>
                <div>
                  <select name="" id="" className='text-white_FAFAFA font-normal font-poppins text-[15px] cursor-pointer leading-[21px] bg-transparent'>
                      <option className='text-text_000000' value="">English</option>
                      <option className='text-text_000000 ' value="">Bangla</option>
                      <option className='text-text_000000 ' value="">French</option>
                  </select>
                </div>
            </div>
          </div>
      </div>
    </> 
  )
}

export default Header
