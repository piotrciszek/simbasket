import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useHttp: () => {
  sendRequest: (
    request: RequestObject,
    successHandler: (data: ServerResponse) => void,
    errorHandler: (data: string) => void
  ) => void;
} = () => {
  const navigate = useNavigate();

  const sendRequest = useCallback(
    (
      request: RequestObject,
      successHandler: (data: ServerResponse) => void,
      errorHandler: (data: string) => void
    ) => {
      const { REACT_APP_BACKEND_URL } = process.env;
      const fullUrl = REACT_APP_BACKEND_URL + request.url;

      const params: RequestInit = {
        method: request.method,
      };
      if (request.body) {
        params.body = request.body;
      }
      if (request.headers) {
        params.headers = request.headers;
      } else {
        params.headers = {
          'Content-Type': 'application/json',
        };
      }
      fetch(fullUrl, params)
        .then((res) => {
          if (res.status == 401) {
            navigate('/login', { replace: true });
            return;
          } else if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data: ServerResponse) => {
              let errorMessage = '';
              if (data && data.status === 'error' && data.message) {
                errorMessage = data.message;
              } else {
                errorMessage = 'Cannot fetch data';
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data: ServerResponse) => {
          if (data.status === 'success') {
            successHandler(data);
          } else {
            throw new Error(
              data.message && data.message.length > 0
                ? data.message
                : ('Operation failed. Try again later or contact our customer service.')
            );
          }
        })
        .catch((err: Error) => {
          errorHandler(err.message);
        });
    },
    [navigate]
  );
  return { sendRequest };
};
export type ServerResponse = {
  status: string;
  message: string;
  data: any;
  error?: { message: string };
};
export type RequestObject = { url: string; method: string; body?: BodyInit; headers?: HeadersInit };

export default useHttp;
