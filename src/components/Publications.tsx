import React from 'react';
import { Publication } from '../api/types';
import { NOTE_LINK } from './App';
import { EditIcon } from './icons';

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
    return `${NOTE_LINK}${publication.token}?back=${username}#${publication.public}`;
  };

  const shouldShowModificationDate = (publication: Publication): boolean => {
    const created_at = new Date(publication.created_at);
    const modifiet_at = new Date(publication.modified_at);

    return created_at.toDateString() !== modifiet_at.toDateString();
  };

  return (
    <div className="mx-auto py-8 w-max max-w-full prose prose-sm md:prose px-4 sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="pb-8 font-bold text-2xl">{username}</div>
      {publications.map((publication: Publication) => (
        <div key={publication.token} className="pb-4">
          <a className="text-lg" href={shareLink(publication)}>
            {publication.title}
          </a>
          <div className="flex flex-row gap-4">
            <div className="text-gray-500">
              {creationDate(publication.created_at)}
            </div>
            {shouldShowModificationDate(publication) && (
              <div className="text-gray-500 flex flex-row gap-1 items-center">
                <EditIcon className="w-4 h-4" />
                {creationDate(publication.modified_at)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Publications;
