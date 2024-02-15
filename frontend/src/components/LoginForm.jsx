import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { auth } from "../firebase"
import { getAuth, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [password, setPassword ] = useState('');
  const [email, setEmail ] = useState('');
  const navigate = useNavigate();

  const SignIn= (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      navigate("/dashboard");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
    <form onSubmit={SignIn} className='bg-yellow-300 p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <input type='text' 
        className='mt-2 p-2 w-full border border-gray-300 rounded' 
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mt-2 p-2 w-full border border-gray-300 rounded' placeholder='password' />
        <button type='submit' className='w-full mt-4 botder p-3 bg-red-400 rounded text-white text-bold hover:bg-red-500'>Login</button>
    </form>
    </div>
  )
}

export default LoginForm