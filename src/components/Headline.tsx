import React from 'react';
import screenshot from '../assets/fieldnotes.png';
import '../style.css';

const Headline = (): React.ReactElement => {
  return (
    <div className="flex flex-col pt-16 items-center">
      <div className="text-6xl font-bold">Keep note of the noteworthy</div>
      <div className="pt-12 text-4xl font-bold highlight">
        Minimalist encrypted note taking
      </div>
      <div className="pt-2 text-xl text-center">
        Write in an unobtrusive environment, wherever you are.
        <br /> Share with your friends in confidence or publish to the world.
      </div>
      <img
        className="mt-24 shadow-2xl w-3/4 border border-black rounded-md"
        src={screenshot}
      />
    </div>
  );
};

export default Headline;
