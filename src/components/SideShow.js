import React, { useEffect } from 'react'
import "./SideShow.css"
import img3 from "./../img/p1.jpg"
import img4 from "./../img/p2.jpg"
import img5 from "./../img/p3.jpg"
import img6 from "./../img/p4.jpg"
import img7 from "./../img/p5.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';

function SideShow() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div>
            <h1 className='mt-16 ml-24 text-4xl'>DISCOVER</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-10 p-2 sideshow-all lg:ml-24 sm:ml-20 mt-6'>
            <div>
                <div className='grid grid-rows-1'>
                <img data-aos="fade-up" className='rounded-lg mb-6' src={img3} alt=""></img>
                <img data-aos="fade-up" className='rounded-lg' src={img4} alt=""></img>
                </div>
               
            </div>
            <div>
                <img data-aos="fade-up" className='rounded-md' src={img5} alt=""></img>
            </div>
            <div>
            <div className='grid grid-rows-1'>
                <img data-aos="fade-up" className='rounded-lg mb-6'  src={img6} alt=""></img>
                <img data-aos="fade-up" className='rounded-lg' src={img7} alt=""></img>
                </div>
            </div>
            
           
           
        </div>
        </div>
        
    )
}

export default SideShow
