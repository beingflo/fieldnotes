import React from 'react';
import '../style.css';
import { GithubIcon } from './icons';

const Open = (): React.ReactElement => {
  return (
    <div className="bg-[#B2CEA1]">
      <span className="absolute font-bold p-2 text-white bg-black">open</span>
      <div className="flex flex-col p-16 items-center">
        <div className="text-4xl font-semibold text-center">Open Source</div>
        <div className="text-center pt-4">
          We believe software wants to be free. <br /> That's why our web
          application, reader application as well as the server is open source.
        </div>
        <div className="flex flex-row gap-4 p-4">
          <a
            href="https://github.com/beingflo/write.fieldnotes"
            className="flex flex-row items-center gap-2"
          >
            <GithubIcon className="w-8 h-8" />
            <span className="underline">Web app</span>
          </a>
          <a
            href="https://github.com/beingflo/fieldnotes"
            className="flex flex-row items-center gap-2"
          >
            <GithubIcon className="w-8 h-8" />
            <span className="underline">Reader app</span>
          </a>
          <a
            href="https://github.com/beingflo/api.fieldnotes"
            className="flex flex-row items-center gap-2"
          >
            <GithubIcon className="w-8 h-8" />
            <span className="underline">Server</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Open;
