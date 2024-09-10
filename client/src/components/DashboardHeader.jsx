import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='bg-black text-white'>
        <div className='py-4 flex justify-between px-8 items-center' >
              <div className='font-bold text-red-400 '>
                Xpay
              </div>

              <div className='flex gap-4 items-center'>
               <span>Hello, User</span>
                <button className='border-2 px-4 py-2 rounded-lg'>SignOut</button>
              </div>
        </div>      
    </div>
  )
}

export default DashboardHeader
