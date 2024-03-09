import { configureStore } from "@reduxjs/toolkit";
import boardgamesReducer from "./boardgamelist/slice";
import boardgameReducer from "./boardgame/slice";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: { boardgamesReducer, boardgameReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
