import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { BggResponse } from "../../utils/types";
import { getBoardgames } from "../../utils/boardgameAPI";

type boardgameListState = {
  boardgamesList: BggResponse[] | any;
  boardgamesLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: boardgameListState = {
  boardgamesList: [],
  boardgamesLoadingStatus: "idle",
};

export const fetchBoardgames = createAsyncThunk(
  "boardgames/fetchBoardgames",
  async ({ start, amount }: { start: number; amount: number }, thunkAPI) => {
    try {
      const response = await getBoardgames(start, amount);
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const boardgameListSlice = createSlice({
  name: "boardgames",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardgames.pending, (state) => {
        state.boardgamesLoadingStatus = "pending";
      })
      .addCase(fetchBoardgames.fulfilled, (state, action) => {
        state.boardgamesList = action.payload;
        state.boardgamesLoadingStatus = "succeeded";
      })
      .addCase(fetchBoardgames.rejected, (state) => {
        state.boardgamesLoadingStatus = "failed";
      });
  },
});

export default boardgameListSlice.reducer;
