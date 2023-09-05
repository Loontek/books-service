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
            { totalItems: number; items: IVolume[] },
            {
                q: string;
                subject: string;
                orderBy: string;
                limit: number;
                page: number;
            }
        >({
            query: arg => {
                const { q, subject, orderBy, limit, page } = arg;

                const query =
                    subject === 'all'
                        ? `q=${q}`
                        : `q="${q}"+subject:${subject}`;
                const startIndex = page * limit;

                return `volumes?${query}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${limit}&${
                    import.meta.env.VITE_API_KEY
                }`;
            },
        }),
    }),
});

export const {
    useGetVolumeByIdQuery,
    useGetVolumesQuery,
    useLazyGetVolumesQuery,
} = volumeApi;
