import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const configurePersist = (rootReducer) => {
    const persistConfig = {
        key: 'Salaries',
        storage,
        whitelist: ['Calculate'],
    };

    return persistReducer(persistConfig, rootReducer);
};
