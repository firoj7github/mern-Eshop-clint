import React from 'react'
import img from "./../img/j3.jpg"


function Title() {
    
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-1 mb-32'>
          <div className='w-full'>
           <img className='h-80 lg:ml-32 sm:ml-28 lg:mt-32 sm:mt-28 rounded' src={img} alt=""></img>
          </div>
          <div className='w-full h-96 lg:ml-20 sm:ml-12'>
            <h1 className='mt-44  font-bold text-5xl w-full'>Start New Journey</h1>
           <p className='mt-2 w-96'>Samsung Discover the latest range of consumer products with cutting-edge Throughout the years, there is one prominent symbol on technology including Smartphones, Barphones, Tabs.</p>
            <button className='bg-red-500 pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-white'>Learn More</button>
          </div>
        
        </div>
    )
}

export default Title
