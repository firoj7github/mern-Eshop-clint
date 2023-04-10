import React, { useEffect } from 'react'
import "./Banner.css"
import img1 from "./../../img/1.png"
import img2 from "./../../img/2.png"



function Banner() {
    
    return (
        
<div id="default-carousel" className="relative w-full " data-carousel="slide">
    
    <div className="relative slide-manage z-10">
        
        <div className="hidden duration-1100 ease-in-out" data-carousel-item>
        
            <div className='img-control bg-gray-300 h-96'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-1'>
                <div> 
     
                    <h3 className='md:mt-32 sm:mt-2 text-4xl ml-24'>Samsung M31</h3>
                    <h1 className='text-2xl mt-2 ml-24'>Latest Product</h1>
                    <p className='text-lg mt-2 ml-24'>Samsung offers latest smartphones with advanced technology and design. Buy 3G, 4G, dual sim smartphone at best prices in India. View full range of galaxy</p>
                    <button className='bg-red-500 pl-4 pr-4 pt-2 pb-2 mt-4 ml-24 rounded-md text-white'>Learn More</button>
                    
                </div>
                <div data-aos="zoom-in-right">
                    <img className='img-manage lg:ml-40 sm:ml-20 lg:w-96 sm:w-56' src={img1} alt=""/>
                </div>
                </div>

            </div>
            
            
        </div>
        
        <div className="hidden duration-1100 ease-in-out" data-carousel-item>
        <div className='img-control bg-gray-300 '>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-1'>
                <div>
                    <h3 className='md:mt-32 sm:mt-2 text-4xl ml-24'>Oppo S20</h3>
                    <h1 className='text-2xl mt-2 ml-24'>New Version</h1>
                    <p className='text-lg mt-2 ml-24'>Samsung offers latest smartphones with advanced technology and design. Buy 3G, 4G, dual sim smartphone at best prices in India. View full range of galaxy</p>
                    <button className='bg-red-500 pl-4 pr-4 pt-2 pb-2 mt-4 ml-24 rounded-md text-white'>Learn More</button>
                    
                </div>
                <div>
                    <img className='img-manage-1' src={img2} alt=""/>
                </div>
                </div>
        </div>
        </div>
        
        <div className="hidden duration-1100 ease-in-out" data-carousel-item>
        <div className='img-control bg-gray-300 h-96'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-1'>
                <div>
                    <h3 className='md:mt-32 sm:mt-2 text-4xl ml-24'>Redmi K10</h3>
                    <h1 className='text-2xl mt-2 ml-24'>Update Product</h1>
                    <p className='text-lg mt-2 ml-24'>Samsung offers latest smartphones with advanced technology and design. Buy 3G, 4G, dual sim smartphone at best prices in India. View full range of galaxy</p>
                    <button className='bg-red-500 pl-4 pr-4 pt-2 pb-2 mt-4 ml-24 rounded-md text-white'>Learn More</button>
                    
                </div>
                <div>
                    <img className='img-manage' src={img1} alt=""/>
                </div>
                </div>
        </div>
        </div>
        
       
    </div>
    
    
   
    
    
</div>

    )
}

export default Banner
