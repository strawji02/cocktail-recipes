import { createReducer } from "typesafe-actions";
import { RecipeListAction, RecipeListState } from "../index.type";
import {
  GET_RECIPE_LIST,
  GET_RECIPE_LIST_SUCCESS,
  GET_RECIPE_LIST_ERROR,
} from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: RecipeListState = asyncState.initial();

const recipeList = createReducer<RecipeListState, RecipeListAction>(
  initialState,
  {
    [GET_RECIPE_LIST]: () => asyncState.load(),
    [GET_RECIPE_LIST_SUCCESS]: (state, action) =>
      asyncState.success(action.payload),
    [GET_RECIPE_LIST_ERROR]: (state, action) =>
      asyncState.error(action.payload),
  }
);

export default recipeList;
