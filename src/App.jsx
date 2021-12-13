import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import { store } from 'App/store';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <Routes />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

export default App;
