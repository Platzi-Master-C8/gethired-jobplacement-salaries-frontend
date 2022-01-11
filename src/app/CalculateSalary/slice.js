import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSalaryProfile } from '../../services/salaries';

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

const mockDataProfile = {
    "english_level": "B2",
    "seniority": 1,
    "is_remote": false,
    "location": "mx",
    "title_id": "Fullstack",
    "technologies": [
        "string"
    ]
}

export const fetchChartData = createAsyncThunk("post/fetchChartData", (profile) => {
    return getSalaryProfile('salaries', profile)
} // 
)
export const fetchComparisonChartData = createAsyncThunk("post/fetComparisonchChartData", async () => // TODO: mandar profile1 y profile2 como parametro   
    [await getSalaryProfile('salaries', mockDataProfile), await getSalaryProfile('salaries', mockDataProfile)]

)

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
    extraReducers: {
        [fetchChartData.fulfilled]: (state, action) => {
            state.chartData = [action.payload]
        },
        [fetchComparisonChartData.fulfilled]: (state, action) => {
            state.comparisonChartData = action.payload
        },
    }
});

export const { changesForm, clearFormMain, deleteChip } = calculateSalary.actions;

export default calculateSalary.reducer;
