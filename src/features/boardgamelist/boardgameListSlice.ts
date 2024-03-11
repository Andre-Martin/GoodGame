import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { BggData } from "../../utils/types";
import { getBoardgames, getTop50Boargames } from "../../utils/boardgameAPI";

type boardgameListState = {
  boardgamesList: BggData[] | any;
  boardgamesLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: boardgameListState = {
  boardgamesList: [],
  boardgamesLoadingStatus: "idle",
};

export const fetchBoardgames = createAsyncThunk(
  "boardgames/fetchBoardgames",
  async ({ start, amount }: { start?: number; amount?: number }, thunkAPI) => {
    try {
      let response;
      if (typeof start == "number" && typeof amount == "number") {
        response = await getBoardgames(start, amount);
      } else response = await getTop50Boargames();

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
