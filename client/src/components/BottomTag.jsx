import React from 'react'
import { Link } from 'react-router-dom'

const BottomTag = ({label , buttonText , to}) => {
  return (
    <div className='flex justify-center gap-2'>
        <div>
            {label}
        </div>
        <Link to={to} className='underline hover:cursor-pointer' >
        {buttonText}
        </Link>
      
    </div>
  )
}

export default BottomTag
{}