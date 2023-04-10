import React, { useEffect, useState } from 'react'
import "./Product.css"
import Category from './Category';
import { $ }  from 'react-jquery-plugin'

function Product() {

    useEffect(()=>{
        $(document).ready(function () {
            $('.slider-btn').click(function () { 
              $(this).addClass('active').siblings().removeClass('active');
              
                
            });
            
            
            
        });
     },[]);
    const services= [
        {
            
            "id":1,
            "img":"https://i.ibb.co/PzFh6SD/phone-screen-with-abstract-marble-aesthetic.jpg",
            "category":"vivo",
            "name":"Hospital management",
            
        
        
        },
        {
            "id":2,
            "img":"https://i.ibb.co/0XJf1cZ/close-up-hand-holding-smartphone.jpg",
            "category":"oppo",
            "name":"Gymnastic Website",
           
        
        
        },
        {
            
            "id":3,
            "img":"https://i.ibb.co/KjfVmbF/smartphone-screen-showing-lockscreen-with-design-space.jpg",
            "category":"samsung",
            "name":"School Management",
            
        
        },
        {
            "id":4,
            "img":"https://i.ibb.co/BgmNcDw/j1.jpg",
            "category":"redmi",
            "name":"Wild Photography",
            
        
            
        },
        {
            "id":5,
            "img":"https://i.ibb.co/9y4FKQ1/creative-reels-composition.jpg",
            "category":"samsung",
            "name":"Weadding Website",
            
        
        
        },
        {
          
            "id":6,
            "img":"https://i.ibb.co/R7vWBy4/blank-phone-screen-purple-background.jpg",
            "category":"oppo",
            "name":"Food Ordering App"
            
        
        
        }
    ]
    const [items, setItem]=useState(services);
    
    const filterSide=(item)=>{
           const updateItem=services.filter(service=>{
            return service.category ===item;
           })
           setItem(updateItem);
    }
    return (
        <div className='bg-zinc-100 product-all'>
          <h1 className='text-center pt-12 text-4xl'>Find the phone that's right for you</h1>
          <div className='grid lg:grid-cols-5 sm:grid-cols-5 gap-1 h-48 link-manage bg-white mt-8 ml-24 rounded-lg'>
           <a onClick={()=>setItem(services)} className='bg-white pl-4 pr-4 pt-2 pb-2  h-12 w-32 rounded text-gray-500  text-xl text-center ml-20 mt-6 active slider-btn'>All Models</a>
           <a onClick={()=>filterSide('samsung')} className='bg-white pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-gray-500  text-lg text-center h-12 w-32 ml-20 mt-6 slider-btn'>Samsung</a>
           <a onClick={()=>filterSide('oppo')} className='bg-white pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-gray-500  text-lg text-center h-12 w-32 ml-20 mt-6 slider-btn'>Oppo</a>
           <a onClick={()=>filterSide('vivo')} className='bg-white pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-gray-500 text-lg text-center h-12 w-32 ml-20 mt-6 slider-btn'>Vivo</a>
           <a onClick={()=>filterSide('redmi')} className='bg-white pl-4 pr-4 pt-2 pb-2 mt-4 rounded text-gray-500 text-lg text-center h-12 w-32 ml-20 mt-6 slider-btn'>Redmi</a>
          </div>

        {/* product show */}
         <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-1 ml-24 mt-12 category-all'>
         {
                    items.map(service=> <Category service={service} filterSide={filterSide}></Category>)
                }
         </div>
        
        </div>
    )
}

export default Product
