import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import { BlogCard } from './BlogCard';
const db = getFirestore();

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async() =>{
            try{
                const querySnapshot = await getDocs(collection(db, "blogs"));
                const fetchedBlogs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  setBlogs(fetchedBlogs)
            }catch (error) {
                console.error('Error fetching blogs: ', error);
            }
        };
        
        fetchBlogs();
    }, [])

  return (
    <div className='grid grid-cols-12 gap-4'>
    {blogs.map(blog => (
      <div key={blog.id} className='col-span-3'> 
        <BlogCard title = {blog.title} content = {blog.content} id = {blog.id} />
      </div>
    ))}
  </div>
  )
}

export default BlogList