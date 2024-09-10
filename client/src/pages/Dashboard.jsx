import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data , setData] = useState([]);
    const navigate = useNavigate();


    const onChange = async(e) => {
        try {
             const response = await axios.get(`http://localhost:4000/api/v1/user/findUsers/?filter=${e.target.value}`);
             if(!response.data.ok){
                console.log("error while fetching users");
             }else{
                setData(response.data.data);
                console.log(response.data.data)
             }
        } catch (error) {
            console.log("error while searching users");
        }
    }
  return (
    <>
    <DashboardHeader/>
    <div className='mt-8 px-8'> 
        <h2>Your Balance : <span className='font-bold text-red-400'>{10000}</span></h2>
    </div>

    <div className='mt-8 px-8'>
        <h1 className='font-bold text-2xl '>Send Money</h1>
        <input type="text" onChange={onChange} className='w-full px-4 py-2 rounded-xl border border-black mt-4' placeholder='Search User' />
        <div className='flex flex-col mt-4'>
           {
            data?.map((user) => (
                <div key={user._id} className='mt-2 flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <span className='h-12 w-12 flex justify-center items-center bg-green-400 px-3 py-2 rounded-full text-white'>{user.name[0].toUpperCase()}</span>
                    <div className='font-medium text-md'>{user.name}</div>
                  </div>
                  <button onClick={() => navigate('/send-money/?id='+user._id+'&name='+user.name)}  className='bg-black text-white px-4 py-2 rounded-xl cursor-pointer '>Send Money</button>
                </div>
            ))
           }
        </div>
    </div>
    </>
  )
}

export default Dashboard
