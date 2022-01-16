import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { mockDataProfile } from 'Constants/mockData';
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
    formComparison: {
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
{console.log("El Profile del Calculate",profile)
    return getSalaryProfile('salaries', profile)}
);

export const fetchComparisonChartData = createAsyncThunk('post/fetComparisonchChartData', async ([profile1, profile2]) =>
    // TODO: receive the 2 profiles as arguments when we develop the state for the comparison forms
    {console.log("Los profiles del compare",profile1, profile2)
    return [await getSalaryProfile('salaries', profile1), await getSalaryProfile('salaries', profile2)]}
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
        changesFormComparison(state, action) {
            state.formComparison = {
                ...state.formComparison,
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

export const { changesForm, changesFormComparison, clearFormMain, deleteChip } = calculateSalary.actions;

export default calculateSalary.reducer;
