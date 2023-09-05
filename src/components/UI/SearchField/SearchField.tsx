import React, { ChangeEvent, KeyboardEventHandler } from 'react';
import searchIcon from '/magnifying-glass-solid.svg';
import { useDebounce } from '@/hooks/useDebounce.ts';
import styles from './SearchField.module.css';

interface SearchFieldProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onChange, onClick }) => {
    const onChangeDebounced = useDebounce(onChange, 500);

    const onEnterPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.code === 'Enter') {
            onClick();
        }
    };

    return (
        <div className={styles.SearchField}>
            <input
                type="text"
                onChange={e => onChangeDebounced(e)}
                onKeyDown={onEnterPress}
            />
            <button type="button" onClick={() => onClick()}>
                <img src={searchIcon} width={20} height={20} alt="Search" />
            </button>
        </div>
    );
};

export default SearchField;
