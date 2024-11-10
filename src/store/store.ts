import { configureStore } from '@reduxjs/toolkit';
import periodReducer from './period';
import datesReducer from './data';

export const store = configureStore({
  reducer: {
    period: periodReducer,
    dates: datesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
