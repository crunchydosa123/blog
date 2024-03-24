import { getFirestore, doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'

const SaveBlogForm = () => {
    const db = getFirestore();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const addBlog = async(e) =>{
        e.preventDefault();

        try{
            await setDoc(doc(db, 'blogs', title), {
                content: {content},
                author: {author}
            });
            setTitle('');
            setContent('');
            setAuthor('');
            console.log('Blog added successfully!');
        }catch (error) {
            console.error('Error adding blog:', error);
        };
        
    }
    
  return (
    <div className='bg-yellow-300 m-10 p-3'>
        <div className='flex flex-row'>
            <div className='w-full text-3xl font-bold bg-yellow-300 m-2'>Write your own blog</div>
        </div>
        <hr className="my-4 border-gray-700" />
        <form onSubmit={addBlog}>
        <div className='flex flex-row justify-left'>
            <div className='w-full basis-1/5 bg-yellow-300 m-2'>Title</div>
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type='text' className='w-full h-7 p-3 basis-4/5 bg-gray-100 m-2'/>
        </div>
        <div className='flex flex-row justify-left'>
            <div className='w-full basis-1/5 bg-yellow-300 m-2'>Content</div>
            <textarea value={content} onChange={(e)=> setContent(e.target.value)} className='w-full h-10 p-3 basis-4/5 bg-gray-100 m-2'/>
        </div>
        <div className='flex flex-row justify-left'>
            <div className='w-full basis-1/5 bg-yellow-300 m-2'>Author</div>
            <input value={author} onChange={(e)=> setAuthor(e.target.value)} type='text' className='w-full h-7 p-3 basis-4/5 bg-gray-100 m-2'/>
        </div>
        <div className='flex flex-row justify-center'>
            <button className='basis-3/5 h-10 bg-blue-400 text-white font-bold text-xl rounded-md hover:bg-red-500 m-4'>Submit</button>
        </div>
        </form>        
    </div>
  )
}

export default SaveBlogForm