import React from 'react';
import { access_share } from '../api/share_api';
import { decrypt_note } from './crypto';

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
      <div>{content}</div>
    </>
  );
};

export default App;
