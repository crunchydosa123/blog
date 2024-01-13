import React from 'react'
import Navbar from '../components/Navbar'

const Homepage = () => {
  return (
    <>
    <Navbar />
    <div className='grid grid-cols-12 gap-4'>
      <div className='text-black text-left font-bold h-16 mt-2 mb-0 p-4 text-3xl col-span-12'>
      Welcome to P-Blogs
      </div>
      <div className='rounded col-span-8 h-72 bg-gray-300 p-4 mt-0 mr-3 ml-2'>Featured article</div>
      <div className='rounded col-span-4 bg-gray-300 p-4 p-4 mt-0 mr-3 ml-2' >Featured link</div>
      <div className='rounded col-span-3 h-48 bg-gray-300 p-4 p-4 mt-4 mr-3 ml-2' >Other Blog</div>
      <div className='rounded col-span-3 bg-gray-300 p-4 p-4 mt-4 mr-3 ml-2' >Other Blog</div>
      <div className='rounded col-span-3 bg-gray-300 p-4 p-4 mt-4 mr-3 ml-2' >Other Blog</div>
      <div className='rounded col-span-3 bg-gray-300 p-4 p-4 mt-4 mr-3 ml-2' >Other Blog</div>
      </div>
      </>
  )
}

export default Homepage