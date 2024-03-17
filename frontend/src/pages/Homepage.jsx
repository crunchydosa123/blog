import React from 'react';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';

const Homepage = () => {
  return (
    <>
      <Navbar />
        <div className='text-black text-left font-bold h-16 mt-2 mb-0 p-4 text-3xl col-span-12'>
          Welcome to P-Blogs
        </div>
        <BlogList />
    </>
  );
}

export default Homepage;
