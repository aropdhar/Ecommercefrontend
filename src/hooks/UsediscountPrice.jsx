import React from 'react'

const UsediscountPrice = (originalprice = 0 , discountprice = 0) => {
  
    const discountamount = (originalprice * discountprice)/100;
    const discount = originalprice - discountamount;
    return discount
}

export default UsediscountPrice
