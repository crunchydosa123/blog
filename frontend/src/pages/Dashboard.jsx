import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/AuthContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getApp } from 'firebase/app';

const Dashboard = () => {
  const [title, setTitle ] = useState('');
  const [author, setAuthor ] = useState('');
  const [content, setContent ] = useState('');

  const firebase = getApp();

  const db = getFirestore();

  const addBlog = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: title,
        content: content,
        author: author
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
                <div class="form-holder rounded-md m-10 p-5 col-span-8 bg-gray-400">
                  <form onSubmit={addBlog}
                  class="bg-blue-300 p-6 rounded-md">
                    <h2 class="text-2xl font-bold mb-4">Add Blog</h2>
                    <div class="mb-4">
                    <label for="title" class="text-xl font-bold">Title:</label>
                    <input type="text" id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    class="title-input w-full p-3 rounded-md"></input>
                    <label for="title" class="text-xl font-bold">Author:</label>
                    <input type="text" id="title" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    class="title-input w-full p-3 rounded-md"></input>
                    <label for="title" class="text-xl font-bold">Content:</label>
                    <textarea id="content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    class="title-input w-full p-3 rounded-md" rows="6"></textarea>
                    <button type='submit' className='bg-red-700 font-bold text-xl mt-3 hover:bg-yellow-500 p-3 w-full rounded-md'>Submit</button>
                    </div>
                </form>
                </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard