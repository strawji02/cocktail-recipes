import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import cocktails, { cocktailsSaga } from "./legacy/loadcocktails";
import ingredients, { ingredientsSaga } from "./ingredients";

const persistConfig = {
  key: "root",
  storage,
  blacklsit: [],
};
const rootReducer = combineReducers({ ingredients });
export function* rootSaga() {
  yield all([ingredientsSaga()]);
  // yield all([cocktailsSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
