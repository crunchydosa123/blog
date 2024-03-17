import React from 'react'
import imageSample from '../media/image_sample.jpg';
import { useNavigate } from 'react-router-dom';

export const BlogCard = (props) => {
  const navigate = useNavigate();
  
  const takeToBlog = (e) =>{
    e.preventDefault();
    navigate(`/blogs/${props.id}`);
  }
    const { title, content, id } = props;
  return (
    <div className='col-span-3 m-3 bg-white border border-blue-400 rounded-md '>
        <img src={imageSample} alt='Sample Image' className='w-full h-auto' />
        <div className='title font-bold text-xl justify-center mt-2 ml-5 mr-5'>{title}</div>
        <div className='content ml-5 mb-4 mr-5'>{content}</div>
        <button className='bg-blue-500 text-white font-bold hover:bg-blue-700 w-full h-10' onClick={takeToBlog}>{id}</button>
    </div>
    
    
  )
}
