import React from 'react'
import "./Product.css"

function Category({service}) {
    const { img, name}=service;
    return (
       <div className='w-68 h-48'>
         <img className='w-68 h-48' src={img} alt=""></img>
       </div> 
    )
}

export default Category
