import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {
        typeWork: null ?? '',
        'company[]': null,
        job_location: null,
        min_salary: null,
        max_salary: null,
    },
};

const filters = createSlice({
    name: 'Filters',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.filters = {
                ...state.filters,
                ...action.payload,
            };
        },
        resetFilters(state) {
            state.filters = initialState.filters;
        },
    },
});

export const { changeFilter, resetFilters } = filters.actions;

export default filters.reducer;
