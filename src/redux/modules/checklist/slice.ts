import { createSlice } from '@reduxjs/toolkit';
import { ChecklistState, CheckListType } from '../index.type';

interface PayloadData {
  data: number;
  type: CheckListType;
}
const initialState: ChecklistState = {
  base: [],
  beverage: [],
  liquor: [],
};

const checklistSlice = createSlice({
  name: 'checklist',
  initialState,
  reducers: {
    addList(state: ChecklistState, action) {
      const { type, data }: PayloadData = action.payload;
      state[type].push(data);
      state[type].sort();
    },
    delList(state: ChecklistState, action) {
      const { type, data }: PayloadData = action.payload;
      const index = state[type].findIndex((d) => d === data);
      state[type].splice(index, 1);
    },
  },
});

export const { addList, delList } = checklistSlice.actions;

export default checklistSlice.reducer;
