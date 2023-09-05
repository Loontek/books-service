import React, { ChangeEvent } from 'react';
import Select from '@components/UI/Select/Select.tsx';
import SearchField from '@components/UI/SearchField/SearchField.tsx';
import { useAppDispatch, useAppSelector } from '@/hooks/store.ts';
import {
    setActiveCategory,
    setActiveSorter,
    setSearchQuery,
    setStartSearch,
} from '@/store/slices/filtersSlice.ts';
import styles from './FiltersSection.module.css';

interface FilterSectionProps {}

const FiltersSection: React.FC<FilterSectionProps> = () => {
    const { categories, sorters, activeCategory, activeSorter } =
        useAppSelector(state => state.filters);
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(setStartSearch(true));
        setTimeout(() => {
            dispatch(setStartSearch(false));
        }, 0);
    };

    const onCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        dispatch(setActiveCategory(value));
    };

    const onSorterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;

        dispatch(setActiveSorter(value));
    };

    const onSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        dispatch(setSearchQuery(value));
    };

    return (
        <div className={styles.FiltersSection}>
            <h1 className={styles.title}>Найди свою любимую книгу</h1>
            <SearchField onChange={onSearchQueryChange} onClick={onClick} />
            <div className={styles.filters}>
                <Select
                    name="category"
                    description="Выберите категорию"
                    options={categories}
                    defaultValue={activeCategory}
                    onChange={onCategoryChange}
                />
                <Select
                    name="sort"
                    description="Выберите сортировку"
                    options={sorters}
                    defaultValue={activeSorter}
                    onChange={onSorterChange}
                />
            </div>
        </div>
    );
};

export default FiltersSection;
