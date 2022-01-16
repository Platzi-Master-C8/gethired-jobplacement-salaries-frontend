import { createSelector } from '@reduxjs/toolkit';

export const selectFormMain = createSelector(
    (state) => state.Calculate.formMain,
    (form) => form,
);

export const selectFormComparison = createSelector(
    (state) => state.Calculate.formComparison,
    (formComparison) => formComparison,
);

export const selectChartData = createSelector(
    (state) => state.Calculate.chartData,
    (chart) => chart,
);
export const selectComparisonChartData = createSelector(
    (state) => state.Calculate.comparisonChartData,
    (chart) => chart,
);