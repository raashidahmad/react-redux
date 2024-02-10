import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export type RooState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;