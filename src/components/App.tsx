import React from 'react';
import { PublicationsView } from './PublicationsView';
import { NoteView } from './NoteView';
import { useRoute } from 'wouter';
import useLocation from 'wouter/use-location';
import LandingPage from './LandingPage';

const App = (): React.ReactElement => {
  const [isLandingPage] = useRoute('/');
  const [isNote, params] = useRoute('/note/:token');
  const token = (params as { token: string })?.token;
  const [location] = useLocation();
  const username = location.slice(1);

  return (
    <>
      {isLandingPage ? (
        <LandingPage />
      ) : (
        <>
          {isNote ? (
            <NoteView token={token} />
          ) : (
            <PublicationsView username={username} />
          )}
        </>
      )}
    </>
  );
};

export default App;
