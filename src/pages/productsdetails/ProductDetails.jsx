import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import ImageGallery from './imagegallery/ImageGallery'
import ProductContent from './productcontent/ProductContent'

const ProductDetails = () => {
  return (
    <div>
        <div className="container">
            <Breadcrum/>
            <div className='flex gap-x-[71px] my-5'>
                <div className='w-[55%]'>
                    <ImageGallery/>
                </div>
                <div className='w-[40%] py-5 bg-red'>
                    <ProductContent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
