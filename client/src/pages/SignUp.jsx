import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomTag from '../components/BottomTag'

const SignUp = () => {
  return (
    <div className=''>
       <h1 className='text-center my-5 text-2xl font-bold text-red-500'>Xpay</h1>

      <div className='bg-black text-white p-8 '>       
          <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
          <h3 className='text-center text-md text-white/70'>Create your account</h3>

          <div className='mt-8'>
              <Input type={"email"} placeholder={"email"} label={"Email"}/>
              <Input type={"text"} placeholder={"name"} label={"Name"}/>
              <Input type={"password"} placeholder={"password"} label={"Password"}/>
              <Button title={"Create Account"}/>
          </div>

          <div className='mt-8'>
            <BottomTag label={"Already have an account ?"} to={"/signin"} buttonText={"Sign In"}/>
          </div>
      </div>
      
    </div>
  )
}

export default SignUp
