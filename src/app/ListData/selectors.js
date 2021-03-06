import { createSelector } from '@reduxjs/toolkit';

export const selectTechnologies = createSelector(
    (state) => state.ListData.list.Technologies,
    (tech) => tech,
);

export const selectJobs = createSelector(
    (state) => state.ListData.list.Jobs,
    (jobs) => jobs,
);

export const selectSeniority = createSelector(
    (state) => state.ListData.list.Seniority,
    (seniority) => seniority,
);

export const selectEnglish = createSelector(
    (state) => state.ListData.list.English,
    (english) => english,
);

export const selectListCurrencies = createSelector(
    (state) => state.ListData.list.Currencies,
    (currencies) => currencies.map(({ currency }) => currency),
);

export const selectAllList = createSelector(
    (state) => state.ListData.list,
    (all) => all,
);

export const selectLoading = createSelector(
    (state) => state.ListData.loading,
    (load) => load,
);

export const selectError = createSelector(
    (state) => state.ListData.error,
    (error) => error,
);
