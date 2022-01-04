import React from 'react';
import screenshot from '../assets/fieldnotes.png';
import '../style.css';

const Headline = (): React.ReactElement => {
  return (
    <div className="flex flex-col pt-16 items-center">
      <div>
        <span className="text-4xl font-bold highlight">
          Minimalist encrypted note taking
        </span>
      </div>
      <img
        className="mt-16 shadow-2xl w-3/4 border border-black rounded-md"
        src={screenshot}
      />
    </div>
  );
};

export default Headline;
