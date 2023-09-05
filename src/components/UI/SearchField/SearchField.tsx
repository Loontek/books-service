import React from 'react';
import searchIcon from '/magnifying-glass-solid.svg';
import styles from './SearchField.module.css';

const SearchField: React.FC = () => {
    return (
        <div className={styles.SearchField}>
            <input type="text" />
            <button type="button">
                <img src={searchIcon} width={20} height={20} alt="Search" />
            </button>
        </div>
    );
};

export default SearchField;
