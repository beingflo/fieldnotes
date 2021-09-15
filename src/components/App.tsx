import React from 'react';
import { access_share } from '../api/share_api';
import { decrypt_note } from './crypto';
import DOMPurify from 'dompurify';

const App = (): React.ReactElement => {
  const path = window.location.pathname.substring(1);
  const hash = window.location.hash.substring(1);

  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    access_share(path).then((response) => {
      const encryptedContent = response?.content;
      const key = JSON.parse(response?.key);

      decrypt_note(hash, key?.iv_content, encryptedContent).then((content) =>
        setContent(content ?? '')
      );
    });
  }, [path, setContent]);

  return (
    <>
      <div className="h-auto w-full relative">
        <div className="mx-auto break-words max-w-prose">
          <div
            className="prose prose-sm md:prose py-6 px-2"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
