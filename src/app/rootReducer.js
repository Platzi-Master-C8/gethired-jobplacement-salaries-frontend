import { combineReducers } from '@reduxjs/toolkit';

import dataReducer from './ListData';

const rootReducer = combineReducers({
    ListData: dataReducer,
});

export default rootReducer;
