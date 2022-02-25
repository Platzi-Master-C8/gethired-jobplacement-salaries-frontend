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

export const selectCurrency = createSelector(
    (state) => state.Calculate.currency,
    (currency) => currency,
);

export const selectSnackbarShow = createSelector(
    (state) => state.Calculate.snackbarShow,
    (snackbar) => snackbar,
);

export const selectLoadingFormCalculate = createSelector(
    (state) => state.Calculate.loadingButtonsState.formCalculate,
    (loading) => loading,
);

export const selectLoadingFormComparison = createSelector(
    (state) => state.Calculate.loadingButtonsState.formCompare,
    (loading) => loading,
);
