import React from 'react'
import img from "./../img/pexels-samer-daboul-1229456.jpg"

function Booking() {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-1 mb-16'>
          <div className='w-96'>
           <img className='h-96 ml-48 mt-24 rounded' src={img} alt=""></img>
          </div>
          <div className='w-56 h-96'>
            <h1 className='mt-40 font-bold text-xl'>Title : Samsung M20</h1>
            <h3 className='mt-2 font-medium text-xl'>Price : $2500</h3>
            <p className='mt-2 w-96'>Samsung Discover the latest range of consumer products with cutting-edge technology including Smartphones, Barphones, Tabs.</p>
            <button className='bg-red-500 pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-white'>Booking</button>
          </div>
        
        </div>
    )
}

export default Booking
