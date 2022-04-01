import React from 'react';
import screenshot from '../assets/fieldnotes.png';
import '../style.css';

const Headline = (): React.ReactElement => {
  return (
    <div className='flex flex-col items-center pt-16'>
      <div className='text-6xl'>Keep note of the noteworthy</div>
      <div className='highlight pt-12 text-4xl'>
        Minimalist encrypted note taking
      </div>
      <div className='pt-2 text-center text-xl'>
        Write in an unobtrusive environment, wherever you are.
        <br /> Share with your friends in confidence or publish to the world.
      </div>
      <img
        className='mt-24 w-3/4 rounded-md border border-black shadow-2xl'
        src={screenshot}
      />
    </div>
  );
};

export default Headline;
