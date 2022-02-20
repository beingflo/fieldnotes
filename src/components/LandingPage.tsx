import React from 'react';
import logo from '/fieldnotes.png';
import '../style.css';

const LandingPage = (): React.ReactElement => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex flex-row px-16 w-full justify-between items-center">
        <div className="flex flex-row gap-4 items-center">
          <img className="w-12 h-12" src={logo} />
          <div className="text-xl font-bold">fieldnotes</div>
        </div>
        <ul className="flex flex-row items-center gap-6">
          <li className="border-r border-gray-500 pr-6">Pricing</li>
          <li className="border-r pr-6 border-gray-500">
            <a href="https://write.fieldnotes.land">Login</a>
          </li>
          <a
            className="border p-1 border-gray-500 rounded-sm shadow-md hover:bg-yellow-200"
            href="https://write.fieldnotes.land"
          >
            Sign up
          </a>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
