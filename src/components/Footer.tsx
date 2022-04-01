import React from 'react';
import '../style.css';

const Footer = (): React.ReactElement => {
  return (
    <div className='bg-[#F1E3D3]'>
      <span className='absolute bg-black p-2 font-bold text-white'>footer</span>
      <div className='flex flex-col items-center pt-16'>Footer</div>
    </div>
  );
};

export default Footer;
