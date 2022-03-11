import { createSelector } from '@reduxjs/toolkit';

export const selectFilters = createSelector(
    (state) => state.Filters.filters,
    (filters) => filters,
);
