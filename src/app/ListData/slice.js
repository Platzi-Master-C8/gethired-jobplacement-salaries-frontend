import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getListByName } from '@Services/salaries';

// eslint-disable-next-line no-return-await
export const fetchListData = createAsyncThunk('post/fetchListData', async () => ({
    Technologies: await getListByName('technologies'),
    Jobs: await getListByName('titles'),
}));

const dataSlice = createSlice({
    name: 'ListData',
    initialState: {
        list: {
            Technologies: [],
            Jobs: [],
        },
    },
    extraReducers: {
        [fetchListData.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
    },
});

export default dataSlice.reducer;
