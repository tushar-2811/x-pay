import React from 'react'

const Button = ({title}) => {
  return (
    <div className='flex justify-center  my-4 max-w-xl mx-auto '>
   <button className='w-full bg-white text-black rounded-lg px-4 py-2'> 
      {title}
   </button>
    </div>
  )
}

export default Button
