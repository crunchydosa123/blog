import React from 'react'

const LoginForm = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <input type='text' placeholder='username' />
        <input type='password' placeholder='password' />
        <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default LoginForm