import React from 'react';
import '../style.css';

const Pricing = (): React.ReactElement => {
  return (
    <div className="bg-[#98B7C3]">
      <span className="absolute font-bold p-2 text-white bg-black">
        pricing
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 p-24">
        <div className="bg-black text-white p-4 rounded-md">
          <div className="text-2xl">Self hosted</div>
          <div className="pt-4 flex flex-row items-center">
            <span className="text-4xl">free</span>
          </div>
        </div>
        <div className="bg-black text-white p-4 rounded-md">
          <div className="text-2xl">Cloud</div>
          <div className="pt-4 flex flex-row items-center">
            <span className="text-4xl">$2</span>
            <span className="pl-2">per month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
