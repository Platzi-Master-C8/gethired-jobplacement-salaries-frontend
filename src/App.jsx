import React from 'react';
import { ThemeProvider } from '@mui/material';

import { THEME } from 'Constants/theme.constant';

import Routes from 'Routes';

import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

import 'Styles/style.scss';

// Dummy values for the chart

const values = {
    salariesBottom20: 800,
    salariesAverage: 1050,
    salariesTop20: 1200,
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
