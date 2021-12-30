import React from 'react';
import logo from '/fieldnotes.png';
import { HappyIcon } from './icons';
import '../style.css';

const LandingPage = (): React.ReactElement => {
  return (
    <div className="relative flex flex-row p-8">
      <div className="absolute flex flex-row gap-4 items-center">
        <img className="w-16 h-16" src={logo} />
        <div className="text-2xl font-bold">fieldnotes</div>
      </div>
    </div>
  );
};

export default LandingPage;
