import React from 'react'

const ReadyToStart = () => {
  return (
    <div className='bg-[#4F39F6] py-[120px] text-center text-white'>
        <div className='mb-8'>
            <h1 className='text-[40px] mb-4 font-semibold'>
            Ready to Transform Your Workflow?
        </h1>
        <p className='font-light'>
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>
        </div>
        <div>
          <button className="btn !bg-white mr-4 border-none !text-[#4F39F6] rounded-4xl">Explore Products</button>
          <button className="btn  mr-4 bg-[#4F39F6] border-white  !text-white rounded-4xl">View Pricing</button>
        </div>
        <p className='font-light mt-4'>
            14-day free trial • No credit card required • Cancel anytime
        </p>
    </div>
  )
}

export default ReadyToStart