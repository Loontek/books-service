import React, { ChangeEvent } from 'react';
import styles from './Select.module.css';

interface SelectProps {
    name: string;
    description: string;
    options: {
        value: string;
        label: string;
    }[];
    defaultValue: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
    name,
    description,
    options,
    defaultValue,
    onChange,
}) => {
    return (
        <select
            className={styles.Select}
            name={name}
            id=""
            defaultValue={defaultValue}
            onChange={e => onChange(e)}
        >
            <option value="" disabled>
                {description}
            </option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
