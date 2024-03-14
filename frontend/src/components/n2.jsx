import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import UserIcons from './UserIcons';
import { UserContext } from '../contexts/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

const NavSamp = () => {
  const user = useContext(UserContext);
  const auth = getAuth();

  const handlelogout = () =>{
    signOut(auth).then(()=>{
      console.log('signout done')
    }).catch((error) =>{
      console.error(error);
    });
  }
  
  return (  
    <nav className='bg-gray-800 p-6'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='text-white font-bold text-2xl'><a href='/'>P-Blogs</a></div>
        <SearchBar />
        <button className='bg-red-500 hover:bg-blue-500 rounded-md text-white font-bold m-3 p-2' onClick={ handlelogout }>{ user ? 'Login' : 'Logout'}</button>
        <UserIcons />
      </div>
    </nav>
  )
}

export default NavSamp