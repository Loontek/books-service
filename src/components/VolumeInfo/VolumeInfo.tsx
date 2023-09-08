import React from 'react';
import { IVolume } from '@/types';
import styles from './VolumeInfo.module.css';

interface VolumeInfoProps {
    volume: IVolume | undefined;
}

const VolumeInfo: React.FC<VolumeInfoProps> = ({ volume }) => {
    return (
        <>
            <img
                className={styles.img}
                src={
                    volume?.volumeInfo.imageLinks
                        ? volume?.volumeInfo.imageLinks.thumbnail
                        : 'https://www.funnyart.club/uploads/posts/2022-05/1653877149_1-www-funnyart-club-p-kartinki-dlya-oblozhki-knigi-krasivo-1.jpg'
                }
                height={250}
                alt={volume?.volumeInfo.title}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>{volume?.volumeInfo.title}</h2>
                <p>{volume?.volumeInfo.description}</p>
                <span>{volume?.volumeInfo.categories?.join(', ')}</span>
                <p>{volume?.volumeInfo.authors?.join(', ')}</p>
            </div>
        </>
    );
};

export default VolumeInfo;
