import React from 'react';
import { IVolume } from '@/types';
import styles from './VolumeCard.module.css';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
    volume: IVolume;
}

const VolumeCard: React.FC<BookCardProps> = ({ volume }) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`volumes/${volume.id}`);
    };

    return (
        <div className={styles.VolumeCard} onClick={onClick}>
            <img
                className={styles.img}
                src={
                    volume.volumeInfo.imageLinks
                        ? volume.volumeInfo.imageLinks.thumbnail
                        : 'https://www.funnyart.club/uploads/posts/2022-05/1653877149_1-www-funnyart-club-p-kartinki-dlya-oblozhki-knigi-krasivo-1.jpg'
                }
                height={250}
                alt={volume.volumeInfo.title}
            />
            <h2 className={styles.title}>{volume.volumeInfo.title}</h2>
            <span>{volume.volumeInfo.categories?.[0]}</span>
            <p>{volume.volumeInfo.authors?.join(', ')}</p>
        </div>
    );
};

export default VolumeCard;
