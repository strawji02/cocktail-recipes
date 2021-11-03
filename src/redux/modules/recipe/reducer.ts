import { createReducer } from "typesafe-actions";
import { RecipeAction, RecipeState } from "../index.type";
import { GET_RECIPE, GET_RECIPE_SUCCESS, GET_RECIPE_ERROR } from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: RecipeState = {
  recipe: asyncState.initial(),
};

const recepie = createReducer<RecipeState, RecipeAction>(initialState, {
  [GET_RECIPE]: (state) => ({
    ...state,
    recipe: asyncState.load(),
  }),
  [GET_RECIPE_SUCCESS]: (state, action) => {
    return {
      ...state,
      recipe: asyncState.success(action.payload),
    };
  },
  [GET_RECIPE_ERROR]: (state, action) => ({
    ...state,
    recipe: asyncState.error(action.payload),
  }),
});

export default recepie;
