import React, { useEffect, useState } from 'react';
import backgroundImage from './pexels-suket-dedhia-570026.jpg';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const SingleBlog = () => {
  const db = getFirestore();
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() =>{
    const fetchBlog = async() =>{
      try{
        const blogRef = doc(db, "blogs", id);
        const blogDoc = await getDoc(blogRef);
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          console.log("No such document!");
        }
      }catch(error){
        console.error('Error fetching blog: ', error);
      }
    };
    fetchBlog();
  }, [db, id]);
  
  return (
    <div>
      <Navbar />
      <div
        className='blog-cover'
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px', 
        }}
      ></div>
      <div className='blog-text-container pr-20 pl-20 border-black'>
        {blog && (
          <>
            <div className='font-bold text-5xl text-left text-black p-2 m-5 bg-white'>
              {blog.title}
            </div>
            <div className='author-info text-xl text-left pl-2 ml-5'>by {blog.author}</div>
            <div className='line my-6 border-b border-black'></div>
            <div className='blog-crux pt-5 pl-2 ml-5 mr-5 text-black text-lg'>{blog.content}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
