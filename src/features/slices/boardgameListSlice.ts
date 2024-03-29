import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import type { Top50Info } from "../../utils/types";
import { getTop50Boargames } from "../../utils/boardgameAPI";

type boardgameListState = {
  boardgamesList: Top50Info[];
  boardgamesLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: boardgameListState = {
  boardgamesList: [],
  boardgamesLoadingStatus: "idle",
};

export const fetchBoardgames = createAsyncThunk(
  "boardgames/fetchBoardgames",
  async (_, thunkAPI) => {
    try {
      const response = await getTop50Boargames();
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
        state.boardgamesList = action.payload as Top50Info[];
        state.boardgamesLoadingStatus = "succeeded";
      })
      .addCase(fetchBoardgames.rejected, (state) => {
        state.boardgamesLoadingStatus = "failed";
      });
  },
});

export default boardgameListSlice.reducer;
