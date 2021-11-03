import { createReducer } from "typesafe-actions";
import { RecipeAction, RecipeState } from "../index.type";
import {
  GET_RECIPIES,
  GET_RECIPIES_ERROR,
  GET_RECIPIES_SUCCESS,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: RecipeState = {
  recipe: asyncState.initial(),
};

const recepies = createReducer<RecipeState, RecipeAction>(initialState, {
  [GET_RECIPIES]: (state) => ({
    ...state,
    recipe: asyncState.load(),
  }),
  [GET_RECIPIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      recipe: asyncState.success(action.payload),
    };
  },
  [GET_RECIPIES_ERROR]: (state, action) => ({
    ...state,
    recipe: asyncState.error(action.payload),
  }),
});

export default recepies;
