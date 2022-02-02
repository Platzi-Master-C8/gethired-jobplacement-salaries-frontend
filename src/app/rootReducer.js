import { combineReducers } from '@reduxjs/toolkit';

import dataReducer from './ListData/slice';
import calculateReducer from './CalculateSalary/slice';

const rootReducer = combineReducers({
    ListData: dataReducer,
    Calculate: calculateReducer,
});

export default rootReducer;
