import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/AuthContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import SaveBlogForm from '../components/SaveBlogForm';

const Dashboard = () => {
  const [title, setTitle ] = useState('');
  const [author, setAuthor ] = useState('');
  const [content, setContent ] = useState('');

  const user = useContext(UserContext)

  const firebase = getApp();

  const db = getFirestore();

  const addBlog = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: title,
        content: content,
        author: user.email
      });
  
      console.log("Document written with ID: ", docRef.id);
      
      // Clear the form fields after successful submission
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  


  
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
                <div class="form-holder rounded-md m-10 p-5 col-span-8 bg-gray-400">
                  <SaveBlogForm />
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard