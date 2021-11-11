import { createReducer } from "typesafe-actions";
import { ChecklistState, ChekclistAction } from "../index.type";
import { ADD_LIST, DEL_LIST } from "./actions";

const initialState: ChecklistState = {
  base: [],
  beverage: [],
  liquor: [],
};
const checklist = createReducer<ChecklistState, ChekclistAction>(initialState, {
  [ADD_LIST]: (state, action) => {
    const data = action.payload[0];
    const ingredient = action.payload[1];
    return {
      ...state,
      [ingredient]: [...state[ingredient], data].sort(),
    };
  },
  [DEL_LIST]: (state, action) => {
    const data = action.payload[0];
    const ingredient = action.payload[1];
    return {
      ...state,
      [ingredient]: state[ingredient].filter((d) => d !== data).sort(),
    };
  },
});

export default checklist;
