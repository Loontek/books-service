import React from 'react';
import styles from './FiltersSection.module.css';
import Select from '@components/UI/Select/Select.tsx';
import SearchField from '@components/UI/SearchField/SearchField.tsx';

interface FilterSectionProps {}

const FiltersSection: React.FC<FilterSectionProps> = () => {
    const categories = [
        {
            value: 'all',
            label: 'Все',
        },
        {
            value: 'art',
            label: 'Искусство',
        },
        {
            value: 'biography',
            label: 'Биография',
        },
    ];
    const sorters = [
        {
            value: 'relevance',
            label: 'Релевантные',
        },
        {
            value: 'newest',
            label: 'Новые',
        },
    ];

    return (
        <div className={styles.FiltersSection}>
            <h1 className={styles.title}>Найди свою любимую книгу</h1>
            <SearchField />
            <div className={styles.filters}>
                <Select
                    name="category"
                    description="Выберите категорию"
                    options={categories}
                />
                <Select
                    name="sort"
                    description="Выберите сортировку"
                    options={sorters}
                />
            </div>
        </div>
    );
};

export default FiltersSection;
