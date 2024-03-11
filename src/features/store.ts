import { configureStore } from "@reduxjs/toolkit";

import boardgamesReducer from "./boardgamelist/boardgameListSlice";
import boardgameReducer from "./boardgame/boardgameSlice";
import chatReducer from "./chat/chatSlice";

export const store = configureStore({
  reducer: { boardgamesReducer, boardgameReducer, chatReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
