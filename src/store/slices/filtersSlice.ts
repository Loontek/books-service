import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFiltersSlice {
    categories: {
        value: string;
        label: string;
    }[];
    activeCategory: string;
    sorters: {
        value: string;
        label: string;
    }[];
    activeSorter: string;
    searchQuery: string;
    startSearch: boolean;
}

const initialState: IFiltersSlice = {
    categories: [
        {
            value: 'all',
            label: 'All',
        },
        {
            value: 'art',
            label: 'Art',
        },
        {
            value: 'biography',
            label: 'Biography',
        },
        {
            value: 'computers',
            label: 'Computers',
        },
        {
            value: 'history',
            label: 'History',
        },
        {
            value: 'medical',
            label: 'Medical',
        },
        {
            value: 'poetry',
            label: 'Poetry',
        },
    ],
    activeCategory: 'all',
    sorters: [
        {
            value: 'relevance',
            label: 'Relevance',
        },
        {
            value: 'newest',
            label: 'Newest',
        },
    ],
    activeSorter: 'relevance',
    searchQuery: '',
    startSearch: false,
};

const filtersSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setActiveCategory: (state, action: PayloadAction<string>) => {
            state.activeCategory = action.payload;
        },
        setActiveSorter: (state, action: PayloadAction<string>) => {
            state.activeSorter = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setStartSearch: (state, action: PayloadAction<boolean>) => {
            state.startSearch = action.payload;
        },
    },
});

export const {
    setActiveCategory,
    setActiveSorter,
    setSearchQuery,
    setStartSearch,
} = filtersSlice.actions;
export default filtersSlice.reducer;
