import React from 'react';
import '../style.css';

const Pricing = (): React.ReactElement => {
  return (
    <div className='bg-[#98B7C3]'>
      <span className='absolute bg-black p-2 font-bold text-white'>
        pricing
      </span>
      <div className='grid grid-cols-1 gap-24 p-24 md:grid-cols-2'>
        <div className='rounded-lg bg-black p-4 text-white'>
          <div className='text-2xl'>Self hosted</div>
          <div className='flex flex-row items-center pt-4'>
            <span className='text-4xl'>free</span>
          </div>
        </div>
        <div className='rounded-lg bg-black p-4 text-white'>
          <div className='text-2xl'>Cloud</div>
          <div className='flex flex-row items-center pt-4'>
            <span className='text-4xl'>$2</span>
            <span className='pl-2'>per month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
