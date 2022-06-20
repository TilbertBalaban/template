import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from './consts';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({ // query - receive, mutation - change
    fetchStarships: build.query({
      query: () => ({
        url: 'starships/',
      }),
    }),
  }),
});

export default api;
