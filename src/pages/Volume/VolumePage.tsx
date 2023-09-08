import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetVolumeByIdQuery } from '@/store/api/volumesApi.ts';
import Error from '@components/UI/Error/Error.tsx';
import Loader from '@components/UI/Loader/Loader.tsx';
import VolumeInfo from '@components/VolumeInfo/VolumeInfo.tsx';
import styles from './VolumePage.module.css';

const VolumePage: React.FC = () => {
    const params = useParams();
    const { data, isLoading, error } = useGetVolumeByIdQuery(
        params.volumeId ? params.volumeId : '',
    );
    console.log(params);

    return (
        <div className={styles.VolumePage}>
            {error ? (
                <Error />
            ) : isLoading ? (
                <Loader />
            ) : (
                <VolumeInfo volume={data} />
            )}
        </div>
    );
};

export default VolumePage;
