import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getListByName } from 'Services/salaries';

export const fetchListData = createAsyncThunk('post/fetchListData', async () => ({
    Technologies: await getListByName('technologies'),
    Jobs: await getListByName('titles'),
    Seniority: await getListByName('titles'), // TODO: cambiar titles por el nombre real del endpoint
}));

const dataSlice = createSlice({
    name: 'ListData',
    initialState: {
        list: {
            Technologies: [],
            Jobs: [],
            Seniority: [],
        },
    },
    extraReducers: {
        [fetchListData.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
    },
});

export default dataSlice.reducer;
