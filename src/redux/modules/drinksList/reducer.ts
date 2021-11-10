import { createReducer } from "typesafe-actions";
import { DrinksListAction, DrinksListState } from "../index.type";
import { SET_DRINK_LIST } from "./actions";

const initialState: DrinksListState = [];

const drinksList = createReducer<DrinksListState, DrinksListAction>(
  initialState,
  {
    [SET_DRINK_LIST]: (state, action) => ({
      ...state,
      action,
    }),
  }
);

export default drinksList;
