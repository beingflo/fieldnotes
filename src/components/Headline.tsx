import React from 'react';
import '../style.css';

const Headline = (): React.ReactElement => {
  return (
    <div className="flex flex-col pt-16 items-center">
      <div className="text-4xl font-bold highlight">
        Minimalist encrypted note taking
      </div>
      <img
        className="mt-16 shadow-2xl w-3/4"
        src="/src/assets/fieldnotes.png"
      />
    </div>
  );
};

export default Headline;
