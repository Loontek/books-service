import React from 'react';
import styles from './Select.module.css';

interface SelectProps {
    name: string;
    description: string;
    options: {
        value: string;
        label: string;
    }[];
}

const Select: React.FC<SelectProps> = ({ name, description, options }) => {
    return (
        <select className={styles.Select} name={name} id="" defaultValue="">
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
