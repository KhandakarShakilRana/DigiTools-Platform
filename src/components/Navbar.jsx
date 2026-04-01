import React from 'react'
import CartImg from '../assets/shopping-cart.png'

const Navbar = ({cartItems}) => {
  return (
    <div className='max-w-300 flex mx-auto justify-between items-center py-4 px-5'>
        <div className='text-2xl font-bold'>DigiTools</div>
        <div className='list-none md:flex gap-5 hidden'>
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
        </div>
        <div className='flex gap-5 items-center '>
            <div className='relative'>
              <img className='h-4 ' src={CartImg} alt="" />
              <div className='absolute -top-2 -right-1 bg-red-600 rounded-full text-[9px] text-white px-1'>{cartItems.length
                }</div>
            </div>
            <p>Login</p>
            <button className="btn !bg-gradient-to-r !from-[#4F39F6] !to-[#9514FA] !text-white px-4 py-3 !rounded-4xl border-none">Get Started</button>
        </div>
    </div>
  )
}

export default Navbar