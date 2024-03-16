import { combineReducers, configureStore } from "@reduxjs/toolkit";

import boardgameListReducer from "./boardgamelist/boardgameListSlice";
import boardgameReducer from "./boardgame/boardgameSlice";
import chatReducer from "./chat/chatSlice";

const rootReducer = combineReducers({
  boardgameList: boardgameListReducer,
  boardgame: boardgameReducer,
  chat: chatReducer,
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
