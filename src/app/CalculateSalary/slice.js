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
    chartData: []
};

export const fetchChartData = createAsyncThunk("post/fetchChartData", () => // TODO: mandar profile como parametro
    getSalaryProfile('salaries', JSON.stringify({
        "english_level": "B2",
        "seniority": 1,
        "is_remote": false,
        "location": "mx",
        "title_id": "Fullstack",
        "technologies": [
            "string"
        ]
    })) // 
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
            console.log("Este es el payload",action.payload);
            state.chartData = [action.payload]
        }
    }
});

export const { changesForm, clearFormMain, deleteChip } = calculateSalary.actions;

export default calculateSalary.reducer;
