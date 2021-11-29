import React from 'react';
import { access_share, list_publication } from '../api/share_api';
import { decrypt_metadata, decrypt_note } from './crypto';
import DOMPurify from 'dompurify';
import { Publication, PublicationResult } from '../api/types';
import { sortPublications } from '../util';
import { Publications } from './Publications';
import { ArrowLeftIcon } from './icons';

export const NOTE_LINK = 'note/';
export const BACK_QUERY = '?back=';

const App = (): React.ReactElement => {
  const path = window.location.pathname.substring(1);
  const hash = window.location.hash.substring(1);

  const query = window.location.search;
  let backRef = undefined;

  if (query?.startsWith(BACK_QUERY)) {
    backRef = query.substring(6);
  }

  const [note, setNote] = React.useState('');
  const [publications, setPublications] = React.useState<Array<Publication>>(
    []
  );

  const isProfile = !path.startsWith(NOTE_LINK);

  React.useEffect(() => {
    if (!isProfile) {
      const token = path.substring(5);
      access_share(token).then((response) => {
        const encryptedContent = response?.content;

        decrypt_note(hash, response.iv, encryptedContent).then((content) =>
          setNote(content ?? '')
        );
      });
    }
  }, [isProfile, path]);

  React.useEffect(() => {
    const func = async () => {
      if (isProfile) {
        const username = path;
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
      }
    };

    func();
  }, [path, isProfile]);

  return (
    <>
      {isProfile ? (
        <Publications publications={publications} username={path} />
      ) : (
        <div className="h-auto w-full">
          <div className="mx-auto w-max max-w-full sm:max-w-md md:min-w-sm lg:max-w-2xl py-6 md:py-6 px-8 md:px-2 prose prose-sm md:prose">
            {backRef && (
              <button className="pb-4 flex flex-row gap-1 items-center text-gray-700 hover:-translate-x-0.5 transform transition active:scale-90">
                <ArrowLeftIcon className="h-5 w-5" />
                <div>{backRef}</div>
              </button>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(note) }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
