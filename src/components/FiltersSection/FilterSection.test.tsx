import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FiltersSection from '@components/FiltersSection/FiltersSection.tsx';

describe('<FilterSection/>', () => {
    beforeEach(() => {
        render(<FiltersSection />);
    });
    test('Title mounts properly', () => {
        const h1 = screen.getByRole('heading');

        expect(h1).toBeDefined();
    });
    test('Search field mounts properly', () => {
        const input = screen.getByRole('textbox');

        expect(input).toBeDefined();
    });
    test('Select mounts properly', () => {
        const selects = screen.getAllByRole('combobox');

        expect(selects).toBeDefined();
    });
});
