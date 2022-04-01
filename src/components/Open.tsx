import React from 'react';
import '../style.css';
import { GithubIcon } from './icons';

const Open = (): React.ReactElement => {
  return (
    <div className='bg-[#B2CEA1]'>
      <span className='absolute bg-black p-2 font-bold text-white'>open</span>
      <div className='flex flex-col items-center p-16'>
        <div className='text-center text-4xl font-semibold'>Open Source</div>
        <div className='pt-4 text-center'>
          We believe software wants to be free. <br /> That's why our web
          application, reader application as well as the server is open source.
        </div>
        <div className='flex flex-row gap-4 p-4'>
          <a
            href='https://github.com/beingflo/write.fieldnotes'
            className='flex flex-row items-center gap-2'
          >
            <GithubIcon className='h-8 w-8' />
            <span className='underline'>Web app</span>
          </a>
          <a
            href='https://github.com/beingflo/fieldnotes'
            className='flex flex-row items-center gap-2'
          >
            <GithubIcon className='h-8 w-8' />
            <span className='underline'>Reader app</span>
          </a>
          <a
            href='https://github.com/beingflo/api.fieldnotes'
            className='flex flex-row items-center gap-2'
          >
            <GithubIcon className='h-8 w-8' />
            <span className='underline'>Server</span>
          </a>
        </div>
      </div>
      <div className='flex flex-col items-center p-16'>
        <div className='text-center text-4xl font-semibold'>Open Data</div>
        <div className='pt-4 text-center'>
          Data should not be constrained to one application.
          <br /> That's why you can export your notes in multiple formats at any
          time, no vendor lock in. <br />
          <br />
          Data should be owned by the user. For this reason, you can supply your
          own storage backend <br /> to synchronize your notes as you write
          them, ensuring we cannot keep your data hostage.
        </div>
      </div>
      <div className='flex flex-col items-center p-16'>
        <div className='text-center text-4xl font-semibold'>Open Business</div>
        <div className='pt-4 text-center'>
          We don't like secrecy. You should have access to information <br />
          to make informed decisions about the home of your notes.
        </div>
      </div>
    </div>
  );
};

export default Open;
