import { combineReducers } from '@reduxjs/toolkit';

import dataReducer from './ListData/slice';
import calculateReducer from './CalculateSalary/slice';
import filtersReducer from './Filters/slice';

const rootReducer = combineReducers({
    ListData: dataReducer,
    Calculate: calculateReducer,
    Filters: filtersReducer,
});

export default rootReducer;
