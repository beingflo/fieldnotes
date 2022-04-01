import React from 'react';
import logo from '/fieldnotes.png';
import '../style.css';

const LandingPage = (): React.ReactElement => {
  return (
    <div className='flex flex-col py-8'>
      <div className='flex w-full flex-row items-center justify-between px-16'>
        <div className='flex flex-row items-center gap-4'>
          <img className='h-12 w-12' src={logo} />
          <div className='text-xl font-bold'>fieldnotes</div>
        </div>
        <ul className='flex flex-row items-center gap-6'>
          <li className='border-r border-gray-500 pr-6'>Pricing</li>
          <li className='border-r border-gray-500 pr-6'>
            <a href='https://write.fieldnotes.land'>Login</a>
          </li>
          <a
            className='rounded-sm border border-gray-500 p-1 shadow-md hover:bg-yellow-200'
            href='https://write.fieldnotes.land'
          >
            Sign up
          </a>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
