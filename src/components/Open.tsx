import React from 'react';
import '../style.css';

const Open = (): React.ReactElement => {
  return (
    <div className="bg-[#B2CEA1]">
      <span className="absolute font-bold p-2 text-white bg-black">open</span>
      <div className="flex flex-col pt-16 items-center">Open</div>
    </div>
  );
};

export default Open;
