import React from 'react';
import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

import 'Styles/style.scss';

// Dummy values for the chart
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
    {
        salariesBottom20: 909,
        salariesAverage: 1223,
        salariesTop20: 1378,
    },
];
const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <Routes />
            <div style={{ width: '50%', margin: '0 auto' }}>
                <NormalDistributionChart values={values} />
            </div>
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
