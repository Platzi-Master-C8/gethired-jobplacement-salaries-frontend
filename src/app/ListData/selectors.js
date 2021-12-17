import { createSelector } from '@reduxjs/toolkit';

export const selectTechnologies = createSelector(
    (state) => state.ListData.list.Technologies,
    (tech) => tech,
);

export const selectJobs = createSelector(
    (state) => state.ListData.list.Jobs,
    (jobs) => jobs,
);
