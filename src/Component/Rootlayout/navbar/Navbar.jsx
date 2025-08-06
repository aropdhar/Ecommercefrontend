import React, { useEffect, useRef, useState } from 'react'
import { BsCart3 } from 'react-icons/bs';
import { CiHeart, CiLogout, CiStar } from 'react-icons/ci';
import { IoIosCloseCircleOutline, IoMdSearch } from 'react-icons/io';
import { LuUser } from 'react-icons/lu';
import { PiShoppingBagOpenLight } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {

  const [userlog , setUserlog] = useState(false);
  const useractionRef = useRef(null);
  const product = useSelector((state) => state.ProductStore);
  
  

  // user button on/off section

    // useEffect(()=>{
    //     window.addEventListener("click" ,  (event)=>{
    //         if(useractionRef.current.contains(event.target)){
    //         setUserlog(!userlog)
    //         }else{
    //         setUserlog(false)
    //         }
    //     })
    // }, [userlog])
    
    const handleUser = () =>{
      if(!userlog){
        setUserlog(true)
      }else{
        setUserlog(false)
      }
    }
  
    const navItem = [
        {
            id: 1,
            item: "Home",
            pathRoute: ''
        },
        {
            id: 2,
            item: "Contact",
            pathRoute: "contact"
        },
        {
            id: 3,
            item: "About",
            pathRoute: "about"
            
        },
        {
            id: 4,
            item: "SignUp",
            pathRoute: "signup"
        }
    
    ];

  return (
    <>
      <div className='pt-[40px] pb-[16px] border-b-[1.5px] border-b-text_7D8184'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-text_000000 font-Inter text-[24px] leading-[24px] cursor-pointer hover:text-text_7D8184'>Exclusive</h1>
                </div>
                <div> 
                  <ul className='flex items-center gap-x-[48px]'>
                    {navItem?.map((nav)=>(
                      <li key={nav.id} className='menuUnderLine'>
                       <NavLink
                          to={`/${nav.pathRoute}`}
                          className={({ isPending , isActive }) =>
                            isPending ? "text-black text-[17px] font-Inter font-normal" 
                          : isActive ? "text-red text-[17px] font-Inter font-normal" : "text-text_000000 text-[17px] font-Inter font-normal"
                          }
                        >
                          {nav.item}
                      </NavLink>
                    </li>
                    ))

                    }
                  </ul>
                 
                </div>

                <div className='basis-1/3 flex items-center justify-between'>
                  <div className='flex relative items-center'>
                      <input type="text" placeholder='What are you looking for?' className='bg-white_F5F5F5 py-[7px] pl-[20px] pr-[32px] rounded-[5px]'/>
                      <IoMdSearch className='absolute top-1/1 text-[24px] right-[5px] text-text_000000 cursor-pointer'/>
                  </div>
                  <div className='flex items-center gap-[30px] cursor-pointer'>
                     <Link className='text-[32px] text-text_000000 ' to={'/wishlist'}>
                        <CiHeart />
                     </Link>
                         <div className='relative'>
                            <Link to={'/addtocart'} className='text-[32px] text-text_000000 cursor-pointer cartno'>
                                <BsCart3 />
                            </Link>
                            {product?.totalItem > 0 &&(
                              <span className='absolute left-[60%] top-[-25%] bg-button_DB4444 w-[28px] h-[28px] text-center rounded-[50%] text-[20px] leading-[25px] text-white'>{product?.totalItem}</span>
                            )}
                         </div>
                     
                     <span onClick={handleUser} className='text-[30px] text-white_color bg-button_DB4444 p-[6px] rounded-[50%] cursor-pointer' ref={useractionRef}>
                        <LuUser />
                     </span>
                  </div>
                </div>
            </div>
            {userlog && 
              <div className='absolute z-[1000] bg-text_7D8184 pt-[18px] pr-[12px] pb-[10px] pl-[20px] rounded-[4px] top-[20%] right-[134px]'>

              <div className='text-white_FAFAFA hover:bg-white  p-[5px] hover:p-[5px] hover:text-text_000000 transition-all hover:rounded-[5px] flex items-center gap-x-[16px] mb-[13px] cursor-pointer'>
                <span className='text-[32px]'>
                  <LuUser />
                </span>
                <h1 className='text-[14px] font-poppins  font-normal leading-[21px]'>Manage My Account</h1>
              </div>
              <div className='text-white_FAFAFA flex items-center gap-x-[16px] mb-[13px] cursor-pointer hover:bg-white  p-[5px] hover:p-[5px] hover:text-text_000000 transition-all hover:rounded-[5px]'>
                <span className='text-[32px]'>
                  <PiShoppingBagOpenLight />
                </span>
                <h1 className='text-[14px] font-poppins  font-normal leading-[21px]'>My Order</h1>
              </div>
              <div className='text-white_FAFAFA flex items-center gap-x-[16px] mb-[13px] cursor-pointer hover:bg-white  p-[5px] hover:p-[5px] hover:text-text_000000 transition-all hover:rounded-[5px]'>
                <span className='text-[32px]'>
                    <IoIosCloseCircleOutline />
                </span>
                <h1 className='text-[14px] font-poppins  font-normal leading-[21px]'>My Cancellations</h1>
              </div>
              <div className='text-white_FAFAFA flex items-center gap-x-[16px] mb-[13px] cursor-pointer hover:bg-white  p-[5px] hover:p-[5px] hover:text-text_000000 transition-all hover:rounded-[5px]'>
                <span className='text-[32px]'>
                    <CiStar />
                </span>
                <h1 className='text-[14px] font-poppins  font-normal leading-[21px]'>My Reviews</h1>
              </div>
              <div className='text-white_FAFAFA flex items-center gap-x-[16px] mb-[13px] cursor-pointer hover:bg-white  p-[5px] hover:p-[5px] hover:text-text_000000 transition-all hover:rounded-[5px]'>
                <span className='text-[32px]'>
                  <CiLogout />
                </span>
                <h1 className='text-[14px] font-poppins  font-normal leading-[21px]'>Log Out</h1>
              </div>

              </div>
            }
        </div>
      </div>
    </>
  )
}

export default Navbar
