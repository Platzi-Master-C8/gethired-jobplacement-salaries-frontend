import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getListByName } from 'Services/salaries';
import { getListCurrencies } from 'Services/currency';

export const fetchListData = createAsyncThunk('post/fetchListData', async () => ({
    Technologies: await getListByName('technologies'),
    Jobs: await getListByName('titles'),
    English: await getListByName('english'),
    Seniority: await getListByName('seniority'),
    Currencies: await getListCurrencies(),
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
        },
    },
    extraReducers: {
        [fetchListData.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
    },
});

export default dataSlice.reducer;
