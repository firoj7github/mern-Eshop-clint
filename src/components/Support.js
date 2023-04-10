import React, { useEffect } from 'react'
import "./Support.css"
import { HiOutlineHeart } from "react-icons/hi";
import {HiUserGroup } from "react-icons/hi";
import {HiChartPie } from "react-icons/hi";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Support() {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[])
    return (
        <div className='support-all'>
         <div className='grid grid-cols-3 gap-1 support bg-decoration-green-100 opacity-90'>
            <div data-aos="fade-up" className='ml-56 mt-24 grid md:grid-rows-3 sm:grid-rows-2 h-52'>
                <i className='text-7xl ml-6 text-black'><HiOutlineHeart></HiOutlineHeart></i>
                <div>
                <p className='ml-8 text-2xl text-black'>4000+</p>
            <h1 className='text-2xl text-black'>Happy Clint</h1>
                </div>
           
            </div>
            <div data-aos="fade-up" className='ml-56 mt-24 grid grid-rows-3 h-52'>
                <i className='text-7xl ml-6 text-black'><HiChartPie></HiChartPie></i>
                <div>
                <p className='ml-4 text-2xl text-black'>100000+</p>
            <h1 className='text-2xl text-black ml-4'>Revenue</h1>
                </div>
           
            </div>
            <div data-aos="fade-up" className='ml-56 mt-24 grid grid-rows-3 h-52'>
                <i className='ml-8 text-7xl text-black'><HiUserGroup></HiUserGroup></i>
                <div>
                <p className='ml-8 text-2xl text-black'>50000+</p>
            <h1 className='ml-6 text-2xl text-black'>Customer</h1>
                </div>
           
            </div>
            
            
           
            
            
         </div>
        </div>
    )
}

export default Support
