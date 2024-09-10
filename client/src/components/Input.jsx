import React from 'react'

const Input = ({placeholder , label, type}) => {
  return (
    <div className='my-2 max-w-xl mx-auto'>
        <div className='flex justify-start font-medium pb-2'>{label}</div>
        <input type={type} placeholder={placeholder} className='w-full px-4 py-2 text-black rounded-lg'/>
    </div> 
  )
}

export default Input
