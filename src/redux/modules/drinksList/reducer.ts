import { createReducer } from "typesafe-actions";
import { DrinksListAction, DrinksListState } from "../index.type";
import { SET_DRINKS_LIST } from "./actions";

const initialState: DrinksListState = [];

const drinksList = createReducer<DrinksListState, DrinksListAction>(
  initialState,
  {
    [SET_DRINKS_LIST]: (state, action) => action.payload,
  }
);

export default drinksList;
