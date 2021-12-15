import { createSelector } from '@reduxjs/toolkit';

export const selectFormMain = createSelector(
    (state) => state.Calculate.formMain,
    (form) => form,
);
