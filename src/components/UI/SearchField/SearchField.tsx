import React, {
    ChangeEvent,
    KeyboardEventHandler,
    useEffect,
    useState,
} from 'react';
import searchIcon from '/magnifying-glass-solid.svg';
import { useDebounce } from '@/hooks/useDebounce.ts';
import styles from './SearchField.module.css';

interface SearchFieldProps {
    onChange: (value: string) => void;
    onClick: () => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onChange, onClick }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeDebounced = useDebounce(
        (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
        500,
    );

    useEffect(() => {
        if (!searchQuery) return;

        onChange(searchQuery);
    }, [searchQuery]);

    const onEnterPress: KeyboardEventHandler<HTMLInputElement> = e => {
        if (e.code === 'Enter') {
            onClick();
        }
    };

    return (
        <div className={styles.SearchField}>
            <input
                type="text"
                placeholder="Search..."
                onChange={onChangeDebounced}
                onKeyDown={onEnterPress}
            />
            <button type="button" onClick={() => onClick()}>
                <img src={searchIcon} width={20} height={20} alt="Search" />
            </button>
        </div>
    );
};

export default SearchField;
