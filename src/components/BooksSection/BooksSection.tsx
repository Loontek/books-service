import React from 'react';
import BookCard from '@components/BookCard/BookCard.tsx';
import styles from './BooksSection.module.css';

const BooksSection: React.FC = () => {
    return (
        <div className={styles.BooksSection}>
            <div className={styles.content}>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </div>
    );
};

export default BooksSection;
