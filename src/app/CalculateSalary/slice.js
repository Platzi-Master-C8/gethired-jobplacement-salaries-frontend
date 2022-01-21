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

export const fetchChartData = createAsyncThunk('post/fetchChartData', async (profile, { rejectWithValue }) => {
    const salaryProfile = await getSalaryProfile('salaries', profile)

    if (!salaryProfile.average) {
        return rejectWithValue(salaryProfile)
    }

    return salaryProfile
}
);

export const fetchComparisonChartData = createAsyncThunk('post/fetComparisonchChartData', async ([profile1, profile2], { rejectWithValue }) => {
    const salaryProfile1 = await getSalaryProfile('salaries', profile1)
    const salaryProfile2 = await getSalaryProfile('salaries', profile2)

    if (!salaryProfile1.average) {
        return rejectWithValue(salaryProfile1)
    }
    if (!salaryProfile2.average) {
        return rejectWithValue(salaryProfile2)
    }

    return [salaryProfile1, salaryProfile2]
}
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
            console.log('fetchChartData.fulfilled');
            state.chartData = [action.payload];
        },
        [fetchChartData.pending]: (state) => {
            console.log('fetchChartData.pending');
        },
        [fetchChartData.rejected]: (state) => {
            console.log('fetchChartData.rejected');
            state.snackbarShow = true;
        },
        [fetchComparisonChartData.fulfilled]: (state, action) => {
            console.log('fetchComparisonChartData.fulfilled');
            state.comparisonChartData = action.payload;
        },
        [fetchComparisonChartData.pending]: (state, action) => {
            console.log('fetchComparisonChartData.pending');
        },
        [fetchComparisonChartData.rejected]: (state) => {
            console.log('fetchComparisonChartData.rejected');
            state.snackbarShow = true;
        },
    },
});

export const { changesForm, changesFormComparison, clearFormMain, deleteChip, closeSnackbar } = calculateSalary.actions;

export default calculateSalary.reducer;
