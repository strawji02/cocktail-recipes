import { createReducer } from "typesafe-actions";
import { IngredientsAction, IngredientsState } from "./index.type";
import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_ERROR,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: IngredientsState = {
  ingredients: asyncState.initial(),
};

const ingredients = createReducer<IngredientsState, IngredientsAction>(
  initialState,
  {
    [GET_INGREDIENTS]: (state) => ({
      ...state,
      ingredients: asyncState.load(),
    }),
    [GET_INGREDIENTS_SUCCESS]: (state, action) => ({
      ...state,
      ingredients: asyncState.success(action.payload),
    }),
    [GET_INGREDIENTS_ERROR]: (state, action) => ({
      ...state,
      ingredients: asyncState.error(action.payload),
    }),
  }
);

export default ingredients;
