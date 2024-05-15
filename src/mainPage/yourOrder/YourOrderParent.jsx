import React from 'react'
import './yourOrder.css'
import CardOfYourOrder from './CardOfYourOrder'
const YourOrderParent = (orderList) => {

  // const dummyData = [
  //   {
  //     id: 1,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 2,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 3,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 4,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 5,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 6,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  //   {
  //     id: 7,
  //     orderDetails: {
  //       img: 'assets/image 12 1.svg',
  //       name: 'chapathi',
  //       catogary: true,
  //       price: 149,
  //     },
  //     orderStatus: {
  //       confirmation: 'confirmed',
  //       orderPick: 'pending',
  //       sellerMessage:'will delivery as soon as'
  //     }
  //   },
  // ]
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