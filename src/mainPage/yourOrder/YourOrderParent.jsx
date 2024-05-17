import React from 'react'
import './yourOrder.css'
import CardOfYourOrder from './CardOfYourOrder'
const YourOrderParent = (orderList) => {
  return (
    <>
      <div className="yourOrder">
        <h1  className="font-poppins yourOrder-line pb-3">Your Order List</h1>
        <CardOfYourOrder
          data={orderList || []}
        />
      </div>
    </>
  )
}

export default YourOrderParent