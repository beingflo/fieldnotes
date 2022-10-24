import React from 'react';
import { ShareView } from './ShareView';
import { useRoute } from 'wouter';

const App = (): React.ReactElement => {
  const [, params] = useRoute('/note/:token');
  const token = (params as { token: string })?.token;

  return (
    <>
      <ShareView token={token} />
    </>
  );
};

export default App;
