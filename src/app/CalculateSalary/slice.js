import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mockDataProfile } from 'Constants/mockData';
import { getSalaryProfile } from 'Services/salaries';

const initialState = {
    formMain: {
        title_id: '',
        technologies: [],
        seniority: '',
        english_level: '',
        is_remote: false,
        location: '',
    },
    chartData: [],
    comparisonChartData: [],
};

export const fetchChartData = createAsyncThunk('post/fetchChartData', (profile) =>
    getSalaryProfile('salaries', profile),
);

export const fetchComparisonChartData = createAsyncThunk('post/fetComparisonchChartData', async () =>
    // TODO: receive the 2 profiles as arguments when we develop the state for the comparison forms
    [await getSalaryProfile('salaries', mockDataProfile), await getSalaryProfile('salaries', mockDataProfile)],
);

const calculateSalary = createSlice({
    name: 'CalculateSalary',
    initialState,
    reducers: {
        changesForm(state, action) {
            state.formMain = {
                ...state.formMain,
                ...action.payload.changes,
            };
        },
        clearFormMain(state) {
            state.formMain = initialState.formMain;
        },
        deleteChip: (state, action) => {
            state.formMain.technologies = state.formMain.technologies.filter((chip) => chip !== action.payload);
        },
    },
    // TODO: Add stages when api is rejected
    extraReducers: {
        [fetchChartData.fulfilled]: (state, action) => {
            state.chartData = [action.payload];
        },
        [fetchComparisonChartData.fulfilled]: (state, action) => {
            state.comparisonChartData = action.payload;
        },
    },
});

export const { changesForm, clearFormMain, deleteChip } = calculateSalary.actions;

export default calculateSalary.reducer;
