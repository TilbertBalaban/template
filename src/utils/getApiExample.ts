import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVehicle } from '../models/IVehicle';
import { STAR_WARS_API_URL } from './consts';

export const getApiExample = createApi({
  reducerPath: 'getApiExample',
  baseQuery: fetchBaseQuery({ baseUrl: STAR_WARS_API_URL }),
  endpoints: (build) => ({
    getVehicles: build.query<IVehicle[], number>({
      query: () => ({
        url: 'vehicles/',
      }),
      transformResponse: (response: {
        results: IVehicle[],
      }) => response.results,
    }),
  }),
});
