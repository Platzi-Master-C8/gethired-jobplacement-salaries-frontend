import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { configurePersist } from './persist';
import rootReducer from './rootReducer';

const persists = configurePersist(rootReducer);

export const store = configureStore({
    reducer: persists,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
