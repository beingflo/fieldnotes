import React from 'react';
import { Publication } from '../api/types';

export type Props = {
  publications: Array<Publication>;
};

export const Publications = ({ publications }: Props): React.ReactElement => {
  return (
    <>
      {publications.map((publication: Publication) => (
        <div key={publication.token}>{publication.title}</div>
      ))}
    </>
  );
};

export default Publications;
