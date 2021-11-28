import React from 'react';
import { ThemeProvider } from '@mui/material';

import { THEME } from 'Constants/theme.constant';

import Routes from 'Routes';

import 'Styles/style.scss';
import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Routes />
            <NormalDistributionChart />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
