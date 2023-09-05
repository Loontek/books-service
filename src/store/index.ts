import { configureStore } from '@reduxjs/toolkit';
import { volumeApi } from '@/store/api/volumesApi.ts';

export const store = configureStore({
    reducer: {
        [volumeApi.reducerPath]: volumeApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(volumeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
