import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import cocktails, { cocktailsSaga } from "./legacy/loadcocktails";
import ingredients, { ingredientsSaga } from "./ingredients";
import recipe, { recepieSaga } from "./recipe";
import recipeList, { recipeListSaga } from "./recipeList";
import checklist from "./checklist";
import drinksList from "./drinksList";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklsit: [],
// };
const rootReducer = combineReducers({
  ingredients,
  recipe,
  recipeList,
  checklist,
  drinksList,
});
export function* rootSaga() {
  yield all([ingredientsSaga(), recepieSaga(), recipeListSaga()]);
  // yield all([cocktailsSaga()]);
}

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
