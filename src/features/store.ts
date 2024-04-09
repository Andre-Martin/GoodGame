import { configureStore, combineReducers } from "@reduxjs/toolkit";

import hotListReducer from "./slices/hotListSlice";
import boardgameReducer from "./slices/boardgameSlice";
import searchReducer from "./slices/searchSlice";

const rootReducer = combineReducers({
  hotList: hotListReducer,
  boardgame: boardgameReducer,
  search: searchReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
