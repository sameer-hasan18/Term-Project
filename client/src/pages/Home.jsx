import React from 'react';
import { Link } from 'react-router-dom';
import HomePageImage from './HomePage.png';

export default function Home() {
  return (
    <div>
      {/* top */}
      <div className='flex flex-row gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <div className='flex-1'>
          <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl mb-4' >
            Find and connect to our <span className='text-slate-500'>doctors</span>
            <br />
            with ease
          </h1>
          <div className='text-gray-400 text-base sm:text-xl mb-12'>
            Our hospital management software comes with multiple useful features.
            <br />
            Look through our various doctors and make appointments as you need.
          </div>
          <Link
            to={'/sign-in'}
            className='text-lg sm:text-3xl text-blue-800 font-bold hover:underline'
          >
            <strong>Create an Account or Sign in</strong>
          </Link>
        </div>
        <div className='flex-1'>
          <img src={HomePageImage} alt='Home Page' className='mb-6' />
        </div>
      </div>
    </div>
  );
}