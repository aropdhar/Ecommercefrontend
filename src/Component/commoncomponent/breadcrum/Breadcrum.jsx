import React from 'react'
import { useLocation ,Link } from 'react-router-dom'

const Breadcrum = () => {
    const { pathname } = useLocation(); 
    let pathnameArr = pathname.split("/").filter((path)=> path);
    let breadcrumpath = "";


    
  return (
    <div className='my-20'>
      <div className='container'>
         <div className='flex items-center gap-x-2'>
            <span className='inline-block bg-green-500 px-[20px] py-[10px] rounded-sm'>
                <Link to={"/"}>Home</Link>
            </span>
            {pathnameArr.map((name , index)=>{
                breadcrumpath += `/${name}`
                const isLast = index === pathnameArr?.length - 1;
                return isLast ? 
                <>
                (<span className='bg-purple-400 rounded-sm px-1 py-1 mx-2' key={index}>{name}</span>) 
                
                </>
                : 
                <>
                <span>/</span>
                <span key={index}>
                <Link className='bg-red rounded-sm px-1 py-1 mx-2' to={"breadcrumpath"}>{name}</Link>
                </span>
                
                </>
            })}
         </div>
      </div>
    </div>
  )
}

export default Breadcrum
