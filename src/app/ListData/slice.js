import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getListByName } from 'Services/salaries';
import { getListCurrencies } from 'Services/currency';
import { getListCompanies } from 'Services/filters';
import { getListLocations, getListTypeWork } from '../../services/filters';

export const fetchListData = createAsyncThunk('post/fetchListData', async () => ({
    Technologies: await getListByName('technologies'),
    Jobs: await getListByName('titles'),
    English: await getListByName('english'),
    Seniority: await getListByName('seniority'),
    Currencies: await getListCurrencies(),
    Companies: await getListCompanies(),
    TypeWork: await getListTypeWork(),
    Locations: await getListLocations(),
}));

const dataSlice = createSlice({
    name: 'ListData',
    initialState: {
        list: {
            Technologies: [],
            Jobs: [],
            English: { level: '', texts: [], description: '' },
            Seniority: { level: '', texts: [], description: '' },
            Currencies: [],
            Companies: [],
            TypeWork: [],
            Locations: [],
        },
        loading: false,
        error: null,
    },
    extraReducers: {
        [fetchListData.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.loading = false;
            state.error = null;
        },
        [fetchListData.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchListData.rejected]: (state) => {
            state.loading = false;
            state.error = 'Ups! There is an error';
        },
    },
});

export default dataSlice.reducer;
