import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_O9SOLUTIONS_API_URL,
  prepareHeaders: headers => {
    const token = localStorage.getItem('auth_token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Accepted', 'application/json');
      headers.set('Content-Type', 'application/json');
    }

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const rootApi = createApi({
  reducerPath: 'rootAPI',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Agenda'],
  endpoints: () => ({}),
});
