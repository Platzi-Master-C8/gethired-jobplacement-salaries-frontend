import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    snackbarShow: false,
};

export const fetchChartData = createAsyncThunk('post/fetchChartData', (profile) =>
    getSalaryProfile('salaries', profile)
);

export const fetchComparisonChartData = createAsyncThunk('post/fetComparisonchChartData', async ([profile1, profile2]) =>
    [await getSalaryProfile('salaries', profile1), await getSalaryProfile('salaries', profile2)]
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
        closeSnackbar: (state) => {
            state.snackbarShow = false;
        }
    },
    extraReducers: {
        [fetchChartData.fulfilled]: (state, action) => {
            state.chartData = [action.payload];
        },
        [fetchChartData.rejected]: (state) => {
            state.snackbarShow = true;
        },
        [fetchComparisonChartData.fulfilled]: (state, action) => {
            state.comparisonChartData = action.payload;
        },
        [fetchComparisonChartData.fulfilled]: (state) => {
            state.snackbarShow = true;
        },
    },
});

export const { changesForm, changesFormComparison, clearFormMain, deleteChip, closeSnackbar } = calculateSalary.actions;

export default calculateSalary.reducer;
