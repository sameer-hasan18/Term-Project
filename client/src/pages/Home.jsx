import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (  
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find and connect to our <span className='text-slate-500'>doctors</span>
          <br />
          with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Our hospital management software comes with multiple useful features.
          <br />
          Look through our various doctors and make appointment as you need.
        </div>
        <Link
          to={'/sign-in'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>
 </div>
    )
}

