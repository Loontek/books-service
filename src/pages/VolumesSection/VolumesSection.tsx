import React, { useEffect, useState } from 'react';
import VolumeCard from '@components/VolumeCard/VolumeCard.tsx';
import { useLazyGetVolumesQuery } from '@/store/api/volumesApi.ts';
import { useAppSelector } from '@/hooks/store.ts';
import { IVolume } from '@/types';
import Error from '@components/UI/Error/Error.tsx';
import Loader from '@components/UI/Loader/Loader.tsx';
import styles from './VolumesSection.module.css';

const VolumesSection: React.FC = () => {
    const [page, setPage] = useState(0);
    const [volumes, setVolumes] = useState<IVolume[]>([]);
    const { activeCategory, activeSorter, searchQuery, startSearch } =
        useAppSelector(state => state.filters);
    const [getVolumes, { data, isFetching, error }] = useLazyGetVolumesQuery();

    useEffect(() => {
        if (startSearch && searchQuery) {
            setVolumes([]);
            setPage(0);
            getVolumes({
                q: searchQuery,
                subject: activeCategory,
                orderBy: activeSorter,
                limit: 30,
                page: 0,
            });
        }
    }, [startSearch, searchQuery]);

    useEffect(() => {
        if (searchQuery && page) {
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

        setVolumes(prevState => [...prevState, ...data.items]);
    }, [data]);

    const onClick = () => {
        setPage(prevState => prevState + 1);
    };

    return (
        <div className={styles.VolumesSection}>
            <span>Founded {data ? data?.totalItems : 0} books</span>
            <div className={styles.content}>
                {error ? (
                    <Error />
                ) : (
                    <>
                        {volumes.map(volume => (
                            <VolumeCard key={volume.id} volume={volume} />
                        ))}
                    </>
                )}
            </div>
            {isFetching && <Loader />}
            {!!volumes.length && (
                <button className={styles.button} onClick={() => onClick()}>
                    Load more...
                </button>
            )}
        </div>
    );
};

export default VolumesSection;
