import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getApp } from 'firebase/app';
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
    <div>
    <div>BlogList</div>
    {blogs.map(blog =>(
        <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>{blog.author}</p>
        </div>
    ))}
    </div>
  )
}

export default BlogList