import React from 'react';
import { render, screen } from '@testing-library/react';

import NormalDistributionChart from 'Components/Charts';
// import NormalDistributionChart from '../../../components/Charts';

describe('Tests for NormalDistributionChart', () => {
    test('renders NormalDistributionChart component', () => {
        const values = [
            {
                salariesBottom20: 867,
                salariesAverage: 1065,
                salariesTop20: 1297,
            },
            {
                salariesBottom20: 989,
                salariesAverage: 1123,
                salariesTop20: 1278,
            },
        ];

        const currencyName = 'USD';
        render(<NormalDistributionChart values={values} currencyName={currencyName} />);

        expect(screen.getByText(`Normal distribution of salaries (${currencyName})`)).toBeInTheDocument();
    });
});
