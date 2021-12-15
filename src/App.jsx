import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@master-c8/theme';

import Routes from 'Routes';

import { store, persistor } from 'App/store';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider>
                    <Routes />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

export default App;
