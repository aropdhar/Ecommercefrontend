import React from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import CategoryItem from '../../../Component/commoncomponent/categoryItem/CategoryItem'

const Category = () => {
  return (
    <div>
      <Productcommonlayouts 
        isArrowsTrue={true}
        heading={"Categories"}
        description={"Browse By Category"}
        partialItem = {6}
        Productcard={CategoryItem}
      />
    </div>
  )
}

export default Category
