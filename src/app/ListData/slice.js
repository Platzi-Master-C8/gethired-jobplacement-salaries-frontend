import { createSlice } from '@reduxjs/toolkit';
import { ListMockTechno, ListMockJobs } from 'Constants/mockData';

const dataSlice = createSlice({
    name: 'ListData',
    initialState: {
        Technologies: ListMockTechno,
        Jobs: ListMockJobs,
    },
});

export default dataSlice.reducer;
