import { GET_LOGIN } from '../config';

export const customFetch = (endpoint, options = {}, { onSuccess } = {}) => {
  const opts = {
    method: 'POST',
    ...options,
  };

  return fetch(GET_LOGIN + endpoint, opts)
    .then(res => res.json())
    .then(res => onSuccess && onSuccess(res));
};
