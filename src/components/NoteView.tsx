import React from 'react';
import { access_share } from '../api/share_api';
import { decrypt_note } from './crypto';
import { ArrowLeftIcon, SadIcon } from './icons';
import DOMPurify from 'dompurify';
import useLocation from 'wouter/use-location';
import { SpinnerPage } from './Spinner';
import './noteStyles.css';

export const BACK_QUERY = '?back=';
export const NOTE_LINK = 'note/';

const getHash = () => {
  return window.location.hash.slice(1);
};

const getQuery = () => {
  const search = window.location.search;

  if (search?.startsWith(BACK_QUERY)) {
    return window.location.search.slice(6);
  }

  return '';
};

export type Props = {
  token?: string;
};

export const NoteView = ({ token = '' }: Props): React.ReactElement => {
  const [note, setNote] = React.useState('');
  const [, setLocation] = useLocation();
  const [waiting, setWaiting] = React.useState(true);
  const [error, setError] = React.useState(false);

  const hash = getHash();

  React.useEffect(() => {
    access_share(token)
      .then((response) => {
        const encryptedContent = response?.content;

        decrypt_note(hash, response.iv, encryptedContent)
          .then((content) => setNote(content ?? ''))
          .catch(() => setError(true))
          .finally(() => setWaiting(false));
      })
      .catch(() => {
        setError(true);
        setWaiting(false);
      });
  }, [hash, token]);

  const backRef = getQuery();

  const handleBack = () => {
    if (backRef) {
      setLocation(`/${backRef}`);
    }
  };

  if (waiting) {
    return <SpinnerPage />;
  }

  if (error) {
    return (
      <div className='flex h-screen flex-col items-center pt-20 md:justify-center md:pt-0'>
        <div className='flex flex-col items-center'>
          <SadIcon className='h-24 w-24 text-gray-800' />
          <div className='text-lg text-gray-800'>Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className='h-auto w-full'>
      <div className='prose mx-auto w-max min-w-full max-w-full py-6 px-4 marker:text-gray-800 prose-headings:font-semibold prose-h1:tracking-tight prose-p:text-gray-800 prose-pre:rounded-sm prose-pre:bg-gray-800 sm:min-w-sm md:py-10 md:px-2 lg:max-w-2xl'>
        {backRef && (
          <button
            onClick={handleBack}
            className='flex flex-row items-center gap-1 pb-4 text-gray-700 transition hover:-translate-x-0.5 active:scale-90'
          >
            <ArrowLeftIcon className='h-5 w-5' />
            <div>{backRef}</div>
          </button>
        )}
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(note) }} />
      </div>
    </div>
  );
};

export default NoteView;
