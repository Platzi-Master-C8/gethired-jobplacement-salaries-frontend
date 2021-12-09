import React from 'react';
import { render, waitFor } from '@testing-library/react';

import FormCard from 'Components/FormCard';

const initialValues = {
    jobTitle: '',
    technologies: [],
    senority: '',
    englishLevel: '',
};

describe('Tests for component <FormCard/>', () => {
    const handleChange = jest.fn();
    test('Take Snapshot', () => {
        const { asFragment } = render(
            <FormCard title="Calculate Salary" values={initialValues} onChange={handleChange} />,
        );

        expect(asFragment()).toMatchSnapshot();
    });
    test('Expect title Calculate Salary for card', async () => {
        const { getByText } = render(
            <FormCard title="Calculate Salary" values={initialValues} onChange={handleChange} />,
        );
        await waitFor(() => expect(getByText(/Calculate Salary/i)).toBeInTheDocument());
    });
    test('Have 4 selects', () => {
        const { container } = render(<FormCard values={initialValues} onChange={handleChange} />);
        expect(container.querySelectorAll('input')).toHaveLength(4);
    });
});
