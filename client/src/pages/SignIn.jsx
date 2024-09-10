import React , {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomTag from '../components/BottomTag'


const SignIn = () => {
  const [data , setData] = useState({
    email : "",
    password : ""
   })

   const onChange = (e) => {
       setData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
       }))
   }

   const onSubmit = () => {
     console.log(data);
   }
  return (
    <div className=''>
       <h1 className='text-center my-5 text-2xl font-bold text-red-500'>Xpay</h1>

    <div className='bg-black text-white p-8'>       
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
        <h3 className='text-center text-md text-white/70'>Enter Credentials</h3>

        <div className='mt-8'>
        <Input type={"email"} value={data.email} placeholder={"email"} label={"Email"} name={"email"} onChange={onChange}/>
              <Input type={"password"} value={data.password} name={"password"} placeholder={"password"} label={"Password"} onChange={onChange}/>
              <Button title={"Sign In"} onSubmit={onSubmit}/>
        </div>

        <div className='mt-8'>
            <BottomTag label={"Don't have an account ?"} to={"/signup"} buttonText={"Sign Up"}/>
          </div>
    </div>
    
  </div>
  )
}

export default SignIn
