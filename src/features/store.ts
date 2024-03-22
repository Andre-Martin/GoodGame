import { combineReducers, configureStore } from "@reduxjs/toolkit";

import boardgamesReducer from "./slices/boardgameListSlice";
import boardgameReducer from "./slices/boardgameSlice";
import chatReducer from "./slices/chatSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: { boardgamesReducer, boardgameReducer, chatReducer, searchReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
