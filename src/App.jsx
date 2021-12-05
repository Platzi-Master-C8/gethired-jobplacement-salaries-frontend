import React from 'react';
import { ThemeProvider } from '@mui/material';

import { THEME } from 'Constants/theme.constant';

import Routes from 'Routes';

import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

import 'Styles/style.scss';

// Dummy values for the chart
const values = {
    profile1: {
        salariesBottom20: 867,
        salariesAverage: 1065,
        salariesTop20: 1297,
    },
    profile2: {
        salariesBottom20: 989,
        salariesAverage: 1123,
        salariesTop20: 1278,
    },
};

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Routes />
            <div style={{ width: '50%', margin: '0 auto' }}>
                <NormalDistributionChart values={values} />
            </div>
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
