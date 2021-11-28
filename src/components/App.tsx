import React from 'react';
import { access_share, list_publication } from '../api/share_api';
import { decrypt_metadata, decrypt_note } from './crypto';
import DOMPurify from 'dompurify';
import { Publication, PublicationResult } from '../api/types';
import { sortPublications } from '../util';
import { Publications } from './Publications';

const App = (): React.ReactElement => {
  const path = window.location.pathname.substring(1);
  const hash = window.location.hash.substring(1);

  const [note, setNote] = React.useState('');
  const [publications, setPublications] = React.useState<Array<Publication>>(
    []
  );

  const isProfile = !path.startsWith('note/');

  React.useEffect(() => {
    if (!isProfile) {
      const token = path.substring(5);
      access_share(token).then((response) => {
        const encryptedContent = response?.content;
        const key = JSON.parse(response?.key);

        decrypt_note(hash, key?.iv_content, encryptedContent).then((content) =>
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
            const wrapped_key = JSON.parse(publication?.key);

            const metadata = await decrypt_metadata(
              publication.public,
              wrapped_key.iv_metadata,
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
        <Publications publications={publications} />
      ) : (
        <div className="h-auto w-full">
          <div className="mx-auto w-max sm:max-w-md md:min-w-sm lg:max-w-2xl">
            <div
              className="prose prose-sm md:prose py-6 md:py-6 px-8 md:px-2"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(note) }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
