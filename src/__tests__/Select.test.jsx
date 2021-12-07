import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from 'Components/Commons/Select';

describe('Tests for component <Select />', () => {
    const handleChange = jest.fn();
    const props = {
        value: '',
        onChange: handleChange,
        id: 'label-select',
        label: 'Select option',
        name: 'select',
        options: ['test 1', 'test 2'],
    };

    test('Take Snapshot', () => {
        const { asFragment } = render(<Select {...props} />);

        expect(asFragment()).toMatchSnapshot();
    });
    test('Select with label Select option and click', async () => {
        const { findByLabelText, findByRole } = render(<Select {...props} />);
        const selectLabel = /Select option/i;
        const selectEl = await findByLabelText(selectLabel);

        expect(selectEl).toBeInTheDocument();

        userEvent.click(selectEl);

        const optionsPopupEl = await findByRole('listbox');

        userEvent.click(within(optionsPopupEl).getByText(/test 1/i));

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
