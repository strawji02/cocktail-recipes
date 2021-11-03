import { createReducer } from "typesafe-actions";
import { RecipeAction, RecipeState } from "../index.type";
import { GET_RECIPIE, GET_RECIPIE_ERROR, GET_RECIPIE_SUCCESS } from "./actions";
import { asyncState } from "../../lib/reducerUtils";

const initialState: RecipeState = {
  recipe: asyncState.initial(),
};

const recepies = createReducer<RecipeState, RecipeAction>(initialState, {
  [GET_RECIPIE]: (state) => ({
    ...state,
    recipe: asyncState.load(),
  }),
  [GET_RECIPIE_SUCCESS]: (state, action) => {
    return {
      ...state,
      recipe: asyncState.success(action.payload),
    };
  },
  [GET_RECIPIE_ERROR]: (state, action) => ({
    ...state,
    recipe: asyncState.error(action.payload),
  }),
});

export default recepies;
