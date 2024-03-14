import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const user = useContext(UserContext)
  return (
    <div>
        <Navbar />
        <div className='flex'>
        <div className="w-1/5 h-screen bg-blue-400 text-white">
        {/* Sidebar content goes here */}
        <div className="pt-10 pl-10 pr-10 mb-7 text-xl">Home</div> 
        <div className=" pl-10 pr-10 mb-7 text-xl text-xl ">Account Settings</div> 
        </div>
        <div className='flex-1'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='hello-user text-3xl text-left p-5 font-bold col-span-12 bg-gray-300'>Welcome, {user ? user.email : 'Guest'}</div>
                <div className='hello-user text-3xl text-left font-bold col-span-8 h-80 ml-5 rounded bg-gray-300'></div>
                <div className='hello-user text-3xl text-left font-bold col-span-4 h-80 mr-5 rounded bg-gray-300'></div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard