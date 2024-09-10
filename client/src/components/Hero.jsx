import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../assets/icons/arrow-w.svg'

const Hero = () => {
    return (
        <div className='bg-gradient-to-b from-white  to-purple-400 py-[72px]'>
            <div className="container">

                <div className='flex justify-center items-center'>
                    <Link to={"/"} className='flex gap-1 border border-black py-1 px-2 rounded-xl'>
                        <span className='bg-gradient-to-r from-red-500 via-black to-blue-400 text-transparent bg-clip-text'>New version is here</span>
                        <img src={Arrow} alt="arrow" />
                    </Link>
                </div>

                <div className='flex justify-center mt-12'>
                    <h1 className='text-7xl font-bold sm:text-9xl text-center tracking-tighter inline-flex'>Send Money <br /> on a Click</h1>
                </div>


                <div className='flex justify-center '>
                    <p className='text-xl mt-8 font-medium text-center tracking-tighter max-w-md'>
                        Secure your finances with ease.
                        Access your funds anytime, anywhere with Xpay,
                        Manage your money effortlessly.
                        </p>
                </div>

                <div className='flex justify-center mt-8'>
                    <button className='bg-black text-white px-4 py-2 rounded-xl'>Start now</button>
                </div>
            </div>

        </div>
    )
}

export default Hero
