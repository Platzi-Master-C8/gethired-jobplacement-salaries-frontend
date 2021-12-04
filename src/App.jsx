import React from 'react';
import { ThemeProvider } from '@mui/material';

import { THEME } from 'Constants/theme.constant';

import Routes from 'Routes';

import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

import 'Styles/style.scss';

// Dummy values for the chart

const values = {
    salaryFor10Percent: 800,
    salaryFor25Percent: 1050,
    salaryFor50Percent: 1200,
    salaryFor75Percent: 1300,
    salaryFor90Percent: 1800,
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
