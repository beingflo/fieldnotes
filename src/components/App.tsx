import React from 'react';
import { PublicationsView } from './PublicationsView';
import { NoteView } from './NoteView';
import { useRoute } from 'wouter';
import useLocation from 'wouter/use-location';

const App = (): React.ReactElement => {
  const [isNote, params] = useRoute('/note/:token');
  const token = (params as { token: string })?.token;
  const [location] = useLocation();
  const username = location.slice(1);

  return (
    <>
      {isNote ? (
        <NoteView token={token} />
      ) : (
        <PublicationsView username={username} />
      )}
    </>
  );
};

export default App;
