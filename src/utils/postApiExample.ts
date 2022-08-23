import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';
import { JSON_PLACEHOLDER_API_URL } from './consts';

export const postApiExample = createApi({
  reducerPath: 'postApiExample',
  baseQuery: fetchBaseQuery({ baseUrl: JSON_PLACEHOLDER_API_URL }),
  tagTypes: ['post'],
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: () => ({
        url: 'posts/',
      }),
      providesTags: () => ['post'],
    }),
    postPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: 'posts/',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: () => ['post'],
    }),
  }),
});
