import React from 'react';
import { Publication, PublicationResult } from '../api/types';
import { EditIcon } from './icons';
import { sortPublications } from '../util';
import { list_publication } from '../api/share_api';
import { decrypt_metadata } from './crypto';
import { NOTE_LINK } from './NoteView';

export type Props = {
  username: string;
};

export const PublicationsView = ({ username }: Props): React.ReactElement => {
  const [publications, setPublications] = React.useState<Array<Publication>>(
    []
  );

  React.useEffect(() => {
    const func = async () => {
      const response = await list_publication(username);
      const pubs = await Promise.allSettled(
        response.map(async (publication: PublicationResult) => {
          const encryptedMetadata = publication?.metadata;

          const metadata = await decrypt_metadata(
            publication.public,
            publication.iv,
            encryptedMetadata
          );
          if (metadata) {
            const { title, tags } = JSON.parse(metadata);

            return {
              title: title,
              tags: tags,
              token: publication.token,
              created_at: publication.created_at,
              modified_at: publication.modified_at,
              public: publication.public,
            };
          }
        })
      );
      const decryptedPubs = pubs.map((result: any) => result?.value);
      const sortedPubs = sortPublications(decryptedPubs);
      setPublications(sortedPubs);
    };

    func();
  }, [username]);

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
      <div className="pb-8 font-bold text-2xl">Posts by {username}</div>
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

export default PublicationsView;
