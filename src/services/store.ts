import { combineSlices, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineSlices();

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
});