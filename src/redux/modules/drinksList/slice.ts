import { createSlice } from '@reduxjs/toolkit';
import { DrinksListState } from '../index.type';

const initialState: DrinksListState = { drinks: [] };

const dirnksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setDrinksList(state: DrinksListState, action) {
      state.drinks = action.payload;
    },
  },
});

export const { setDrinksList } = dirnksSlice.actions;

export default dirnksSlice.reducer;
