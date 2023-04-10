import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }
    return (
        <div className='bg-gray-500 h-14 border-y-2 z-20 relative'>
            <nav className='fixed top-0 left-0 bg-white h-14  w-full '>
                <div className='container m-auto flex justify-between iteams-center text-gray-700 '>
                <h1 className='pl-8 py-4 text-xl font-bold'>MobiShop.</h1>
                <ul className='hidden md:flex iteams-center pr-10 text-base font-semibold cursor-pointer'>
                    <Link to="/"> <li className='hover:bg-gray-200 py-4 px-6 '>Home</li></Link>
                   <Link to="/product"><li className='hover:bg-gray-200 py-4 px-6 '>Product</li></Link>
                    
                    <Link to="/booking"><li className='hover:bg-gray-200 py-4 px-6 '>Booking</li></Link>
                    
                    <Link to="/contact"><li className='hover:bg-gray-200 py-4 px-6 '>Contact</li></Link>
                    
                </ul>
                <button className='block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
                    <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                    <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                    <div className='w-5 h-1 bg-gray-600'></div>
                    <div className='absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 traasition-all duration-300 z-index:1'>
                        <ul className='flex flex-col iteams-center w-full text-base cursor-pointer pt-10'>
                            <li className='hover:bg-gray-200 py-4 px-6  w-full'>Home</li>
                            <li className='hover:bg-gray-200 py-4 px-6  w-full'>Product</li>
                            <li className='hover:bg-gray-200 py-4 px-6  w-full'>Booking</li>
                            <li className='hover:bg-gray-200 py-4 px-6  w-full'>About</li>
                            <li className='hover:bg-gray-200 py-4 px-6  w-full'>Contact</li>
                        </ul>
                    </div>
                </button>
                </div>
            </nav>
        </div>

        
    )  
}

export default Header
