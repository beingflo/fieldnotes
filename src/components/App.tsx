import React from 'react';
import { NoteView } from './NoteView';
import { useRoute } from 'wouter';

const App = (): React.ReactElement => {
  const [, params] = useRoute('/note/:token');
  const token = (params as { token: string })?.token;

  return (
    <>
      <NoteView token={token} />
    </>
  );
};

export default App;
