import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import cocktails, { cocktailsSaga } from "./legacy/loadcocktails";
import ingredients, { ingredientsSaga } from "./ingredients";
import recipes, { recepieSaga } from "./recipes";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklsit: [],
// };
const rootReducer = combineReducers({ ingredients, recipes });
export function* rootSaga() {
  yield all([ingredientsSaga(), recepieSaga()]);
  // yield all([cocktailsSaga()]);
}

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
