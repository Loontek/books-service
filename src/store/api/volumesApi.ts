import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVolume } from '@/types';

export const volumeApi = createApi({
    reducerPath: 'volumeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1/',
    }),
    endpoints: builder => ({
        getVolumeById: builder.query<IVolume, string>({
            query: id => `volumes/${id}?${import.meta.env.VITE_API_KEY}`,
        }),
        getVolumes: builder.query<
            IVolume[],
            { q: string; limit: number; page: number }
        >({
            query: arg => {
                const { q, limit, page } = arg;

                return `volumes?q=${q}&startIndex=${
                    page * limit
                }&maxResults=${limit}&${import.meta.env.VITE_API_KEY}`;
            },
        }),
    }),
});

export const { useGetVolumeByIdQuery, useGetVolumesQuery } = volumeApi;
