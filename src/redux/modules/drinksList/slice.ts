import { createSlice } from '@reduxjs/toolkit';
import { DrinksListState } from '../index.type';

const initialState: DrinksListState = [];

const dirnksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setDrinksList(state: DrinksListState, action) {
      state = action.payload;
    },
  },
});

export const { setDrinksList } = dirnksSlice.actions;

export default dirnksSlice.reducer;
