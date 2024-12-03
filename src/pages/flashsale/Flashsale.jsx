import React from 'react'
import Heading from '../../Component/commoncomponent/Heading'
import Timer from '../../Component/commoncomponent/Timer'

const Flashsale = () => {
  return (
    <>
    <div className='my-[140px]'>
        <div className='container'>
            <div>
                <div className='flex items-end gap-x-[87px]'>
                    <Heading title={"Today’s"} description={"Flash Sales"}/>
                    <Timer/>
                </div>
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Flashsale
