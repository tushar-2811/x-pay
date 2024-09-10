import React from 'react'

const Button = ({title , onSubmit , disabled}) => {
  return (
    <div className='flex justify-center  my-4 max-w-xl mx-auto '>
   <button disabled={disabled} onClick={onSubmit} className='w-full bg-white text-black rounded-lg px-4 py-2'> 
      {disabled ? "Loading..." : title}
   </button>
    </div>
  )
}

export default Button
