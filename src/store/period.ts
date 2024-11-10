import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PeriodState {
  period: number;
  len: number;
}

const initialState: PeriodState = {
  period: 0,
  len: 0, // Установите нужное значение или обновите его в другом месте
};

const periodSlice = createSlice({
  name: 'period',
  initialState,
  reducers: {
    setLength: (state, action: PayloadAction<number>) => {
      state.len = action.payload;
    },
    nextPeriod: (state) => {
      state.period = state.period < state.len - 1 ? state.period + 1 : 0;
    },
    prevPeriod: (state) => {
      state.period = state.period > 0 ? state.period - 1 : state.len - 1;
    },
    setPeriod: (state, action: PayloadAction<number>) => {
      state.period = action.payload;
    },
  },
});

export const { setLength, nextPeriod, prevPeriod, setPeriod } = periodSlice.actions;

export default periodSlice.reducer;
