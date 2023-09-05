import React from 'react';
import { IVolume } from '@/types';
import styles from './BookCard.module.css';

interface BookCardProps {
    volume: IVolume;
}

const BookCard: React.FC<BookCardProps> = ({ volume }) => {
    return (
        <div className={styles.BookCard}>
            <img
                className={styles.img}
                src={
                    volume.volumeInfo.imageLinks
                        ? volume.volumeInfo.imageLinks.thumbnail
                        : 'https://www.funnyart.club/uploads/posts/2022-05/1653877149_1-www-funnyart-club-p-kartinki-dlya-oblozhki-knigi-krasivo-1.jpg'
                }
                height={250}
                alt=""
            />
            <h2 className={styles.title}>{volume.volumeInfo.title}</h2>
            <span>{volume.volumeInfo.categories?.[0]}</span>
            <p>{volume.volumeInfo.authors?.join(', ')}</p>
        </div>
    );
};

export default BookCard;
