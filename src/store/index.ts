import { configureStore } from '@reduxjs/toolkit';
import { volumeApi } from '@/store/api/volumesApi.ts';
import filtersReducer from '@/store/slices/filtersSlice.ts';

export const store = configureStore({
    reducer: {
        [volumeApi.reducerPath]: volumeApi.reducer,
        filters: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(volumeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
