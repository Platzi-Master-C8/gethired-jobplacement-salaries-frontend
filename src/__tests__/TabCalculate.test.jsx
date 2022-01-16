import React from 'react';
import { render } from '@testing-library/react';

import TabCalculate from '../components/TabCalculate/TabCalculate';
// import ProviderMock from '../__mocks__/Providermock';

describe('Tests for component <TabCalculate/>', () => {
    test('should render the form and the button', () => {
        const component = render(<TabCalculate />);
        // const h2 = component.container.querySelector('h2');

        component.getByText('Calculate Salary');
    });
});
