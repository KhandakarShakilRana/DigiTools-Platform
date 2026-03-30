import React from 'react'

const StatsSection = () => {
  return (
    <div className='!bg-[#4F39F6]'>
       <div className='
         py-10 flex justify-between items-center max-w-[800px] mx-auto'>
         <div className='flex-col text-center !bg-[#4F39F6]'>
            <p className='font-extrabold text-[60px] !text-white'>50K+</p>
            <p className='text-[24px] !text-white'>Active Users</p>
        </div>
        <div className='flex-col text-center'>
            <p className='font-extrabold text-[60px] !text-white'>200+</p>
            <p className='text-[24px] !text-white'>Premium Tools</p>
        </div>
        <div className='flex-col text-center'>
            <p className='font-extrabold text-[60px] !text-white'>4.9</p>
            <p className='text-[24px] !text-white'>Rating</p>
        </div>
       </div>
    </div>
  )
}

export default StatsSection