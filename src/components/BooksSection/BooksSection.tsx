import React, { useEffect, useState } from 'react';
import BookCard from '@components/BookCard/BookCard.tsx';
import { useLazyGetVolumesQuery } from '@/store/api/volumesApi.ts';
import { useAppSelector } from '@/hooks/store.ts';
import { IVolume } from '@/types';
import styles from './BooksSection.module.css';

const BooksSection: React.FC = () => {
    const [page, setPage] = useState(0);
    const [volumes, setVolumes] = useState<IVolume[]>([]);
    const { activeCategory, activeSorter, searchQuery, startSearch } =
        useAppSelector(state => state.filters);
    const [getVolumes, { data, isLoading, error }] = useLazyGetVolumesQuery();

    useEffect(() => {
        if (startSearch && searchQuery) {
            getVolumes({
                q: searchQuery,
                subject: activeCategory,
                orderBy: activeSorter,
                limit: 30,
                page,
            });
        }
    }, [startSearch]);

    useEffect(() => {
        if (searchQuery) {
            getVolumes({
                q: searchQuery,
                subject: activeCategory,
                orderBy: activeSorter,
                limit: 30,
                page,
            });
        }
    }, [page]);

    useEffect(() => {
        if (!data) return;

        if (startSearch) {
            setVolumes(data.items);
        }

        setVolumes(prevState => [...prevState, ...data.items]);
    }, [data]);

    const onClick = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <div className={styles.BooksSection}>
            <span>Найдено {data ? data?.totalItems : 0} книг</span>
            <div className={styles.content}>
                {error ? (
                    <h2>Something went wrong...</h2>
                ) : isLoading ? (
                    <h2>Loading...</h2>
                ) : (
                    <>
                        {volumes.map(volume => (
                            <BookCard key={volume.id} volume={volume} />
                        ))}
                    </>
                )}
            </div>
            {!!volumes.length && (
                <button className={styles.button} onClick={() => onClick()}>
                    Load more...
                </button>
            )}
        </div>
    );
};

export default BooksSection;
