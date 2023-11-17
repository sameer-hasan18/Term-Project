import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className='bg-slate-200 shadow-md'> {/* Increased the header height */}
      <div className='flex justify-between max-w-8xl p-3'>
        <Link to='/'>
          <h1 className='font-bold text-lg sm:text-2xl lg:text-3xl flex flex-wrap'>
            <span className='text-red-700'>Hospital</span>
            <span className='text-slate-700'> Management</span>
            <span className='text-blue-600'>System</span>
          </h1>
        </Link>
        <ul className='flex gap-4 items-end'>
          <Link to='/home-user'>
            {currentUser ? (
              <li className='text-slate-700 hover:underline font-bold text-lg'> Main</li>
            ) : (
              <li className='text-slate-700 hover:underline font-bold text-lg'> Home</li>
            )}
          </Link>

          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline font-bold text-lg'>
              About
            </li>
          </Link>

          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className='text-slate-700 hover:underline font-bold text-lg'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}