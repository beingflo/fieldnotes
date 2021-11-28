import React from 'react';
import { Publication } from '../api/types';
import { NOTE_LINK } from './App';

export type Props = {
  publications: Array<Publication>;
  username: string;
};

export const Publications = ({
  publications,
  username,
}: Props): React.ReactElement => {
  const creationDate = (date: string): string => {
    const d = new Date(date);

    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareLink = (publication: Publication): string => {
    return `${NOTE_LINK}${publication.token}#${publication.public}`;
  };

  return (
    <div className="mx-auto w-max max-w-full prose prose-sm md:prose px-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="pt-8 pb-8 font-bold text-2xl">{username}</div>
      {publications.map((publication: Publication) => (
        <div key={publication.token} className="pb-4">
          <a href={shareLink(publication)}>{publication.title}</a>
          <div className="text-gray-500">
            {creationDate(publication.created_at)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
