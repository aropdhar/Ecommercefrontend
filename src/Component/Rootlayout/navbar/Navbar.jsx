import React from 'react'
import { IoMdSearch } from 'react-icons/io';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
 
    const navItem = [
        {
            id: 1,
            item: "Home",
        },
        {
            id: 2,
            item: "Contact",
        },
        {
            id: 3,
            item: "About",
        },
        {
            id: 4,
            item: "SignUp",
        }
    
    ];

  return (
    <>
      <div className='pt-[40px] pb-[16px] border-[1.5px] border-b-text_7D8184'>
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
                          to={`/${nav.item}`}
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

                <div className='basis-1/3 '>
                  <div className='flex relative items-center'>
                      <input type="text" placeholder='What are you looking for?' className='bg-white_F5F5F5 py-[7px] pl-[20px] pr-[32px] rounded-[5px]'/>
                      <IoMdSearch className='absolute top-1/1 text-[24px] right-[195px] text-text_000000 cursor-pointer'/>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
