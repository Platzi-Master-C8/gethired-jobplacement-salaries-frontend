import React from 'react';
import { render, waitFor } from '@testing-library/react';

import FormCard from 'Components/FormCard';
import ProviderMock from '../__mocks__/Providermock';

const initialValues = {
    jobTitle: '',
    technologies: [],
    senority: '',
    englishLevel: '',
};

const ComponentForm = (props) => {
    const handleChange = jest.fn();
    const handleDelete = jest.fn();
    return (
        <ProviderMock>
            <FormCard values={initialValues} onChange={handleChange} onDelete={handleDelete} {...props} />
        </ProviderMock>
    );
};

describe('Tests for component <FormCard/>', () => {
    test('Take Snapshot', () => {
        const { asFragment } = render(<ComponentForm title="Calculate Salary" />);

        expect(asFragment()).toMatchSnapshot();
    });
    test('Expect title Calculate Salary for card', async () => {
        const { getByText } = render(<ComponentForm title="Calculate Salary" />);
        await waitFor(() => expect(getByText(/Calculate Salary/i)).toBeInTheDocument());
    });
    test('Have 4 selects', () => {
        const { container } = render(<ComponentForm />);
        expect(container.querySelectorAll('input')).toHaveLength(4);
    });
});
