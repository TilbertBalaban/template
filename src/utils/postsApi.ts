import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';
import { JSON_PLACEHOLDER_API_URL } from './consts';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: JSON_PLACEHOLDER_API_URL }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: () => ({
        url: 'posts/',
      }),
    }),
    postPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: 'posts/',
        method: 'POST',
        body: post,
      }),
    }),
  }),
});
