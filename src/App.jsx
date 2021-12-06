import React from 'react';
import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import 'Styles/style.scss';
import { NormalDistributionChart } from './components/charts/NormalDistributionChart';

const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <Routes />
            <NormalDistributionChart />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
