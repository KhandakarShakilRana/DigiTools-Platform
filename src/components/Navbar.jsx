import React from 'react'
import CartImg from '../assets/shopping-cart.png'

const Navbar = () => {
  return (
    <div className='max-w-[1200px] flex mx-auto justify-between items-center py-[16px]'>
        <div className='text-2xl font-bold'>DigiTools</div>
        <div className='list-none flex gap-5'>
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
        </div>
        <div className='flex gap-5 items-center '>
            <img className='h-4 ' src={CartImg} alt="" />
            <p>Login</p>
            <button className="btn !bg-gradient-to-r !from-[#4F39F6] !to-[#9514FA] !text-white px-4 py-3 !rounded-4xl border-none">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar