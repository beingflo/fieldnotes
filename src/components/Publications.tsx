import React from 'react';
import { Publication } from '../api/types';

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

  return (
    <div className="mx-auto w-max max-w-full prose prose-sm md:prose-lg px-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="pt-8 pb-8 font-bold text-2xl">{username}</div>
      {publications.map((publication: Publication) => (
        <div key={publication.token} className="pb-4">
          <a href={'www.google.ch'}>{publication.title}</a>
          <div className="text-gray-500">
            {creationDate(publication.created_at)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
