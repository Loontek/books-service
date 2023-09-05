import React from 'react';
import styles from './BookCard.module.css';

const BookCard: React.FC = () => {
    return (
        <div className={styles.BookCard}>
            <img
                src={
                    'http://books.google.com/books/publisher/content?id=jQJFDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE7081k8GeFP-P07N5zmzEyAyKEYa-thhU3S3hK5Z5FpG5ZtvGz6ZMElscjvjzk59MMh9EpdjZYf6baL3BPfNXcd8HBfeEE8iKjc2uh-by3jHx9uq6PgC6g-1gXWy6Em876V0xgtC&source=gbs_api'
                }
                width={150}
                alt=""
            />
            <h2>Биология. Полный школьный курс</h2>
            <span>Study Aids / General</span>
            <p>Лилия Камлюк, Николай Лисов</p>
        </div>
    );
};

export default BookCard;
