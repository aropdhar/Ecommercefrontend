import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const ThreeDotsLoader = () => {
  return (
    <div className='flex items-center justify-center'>
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}

export default ThreeDotsLoader
