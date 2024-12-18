import React from 'react'
import Heading from '../../../Component/commoncomponent/Heading'
import Timer from '../../../Component/commoncomponent/Timer'
import Productcard from '../../../Component/commoncomponent/Productcard'

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
                <div>
                  <Productcard/>
                </div>
                
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Flashsale
