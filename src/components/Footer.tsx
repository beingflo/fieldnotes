import React from 'react';
import '../style.css';

const Footer = (): React.ReactElement => {
  return (
    <div className="bg-[#F1E3D3]">
      <span className="absolute font-bold p-2 text-white bg-black">footer</span>
      <div className="flex flex-col pt-16 items-center">Footer</div>
    </div>
  );
};

export default Footer;
