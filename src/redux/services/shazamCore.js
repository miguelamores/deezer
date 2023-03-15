import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bKzuUzVLzA",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '4747c106b9mshd0f4f2e4552a229p1d9250jsn9bdbd4a53748',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({ url: '/search', params: { q: 'trending' } }),
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
