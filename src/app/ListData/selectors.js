import { createSelector } from '@reduxjs/toolkit';

export const selectTechnologies = createSelector(
    (state) => state.ListData.Technologies,
    (tech) => tech,
);

export const selectJobs = createSelector(
    (state) => state.ListData.Jobs,
    (tech) => tech,
);
