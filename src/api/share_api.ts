import config from '../config.json';
import { mapError } from './index';

const SHARE_URL = `${config.api_url}/shares`;

export const access_share = (
  id: string
): Promise<{ content: string; key: string }> => {
  return fetch(`${SHARE_URL}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(mapError)
    .then((response) => response.json());
};
