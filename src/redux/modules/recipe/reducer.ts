import { createReducer } from "typesafe-actions";
import { RecipeAction, RecipeState } from "../index.type";
import {
  GET_RECIPE,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_ERROR,
  RECIPE_INIT,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: RecipeState = {
  recipe: asyncState.initial(),
};

const recepie = createReducer<RecipeState, RecipeAction>(initialState, {
  [GET_RECIPE]: (state) => ({
    ...state,
    recipe: asyncState.load(),
  }),
  [GET_RECIPE_SUCCESS]: (state, action) => ({
    ...state,
    recipe: asyncState.success(action.payload),
  }),
  [GET_RECIPE_ERROR]: (state, action) => ({
    ...state,
    recipe: asyncState.error(action.payload),
  }),
  [RECIPE_INIT]: (state) => {
    console.log("init");
    console.log(asyncState.initial());
    return {
      ...state,
      recipe: asyncState.initial(),
    };
  },
});

export default recepie;
