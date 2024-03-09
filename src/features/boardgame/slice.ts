import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardgameById } from "../../utils/boardgameAPI";
import type { BggResponse } from "../../utils/types";

type initialState = {
  boardgameInfo: any;
  boardgameLoadingStatus: "idle" | "pending" | "succeed" | "failed";
};

const initialState: initialState = {
  boardgameLoadingStatus: "idle",
  boardgameInfo: {},
};

export const fetchBoardgame = createAsyncThunk(
  "boardgame/fetchBoardgame",
  async (id: number, thunkAPI) => {
    try {
      const response = await getBoardgameById(id);
      return response;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const boardgameSlice = createSlice({
  name: "boardgame",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchBoardgame.pending, (state) => {
        state.boardgameLoadingStatus = "pending";
      })
      .addCase(fetchBoardgame.fulfilled, (state, action) => {
        state.boardgameInfo = action.payload;
        state.boardgameLoadingStatus = "succeed";
      })
      .addCase(fetchBoardgame.rejected, (state) => {
        state.boardgameLoadingStatus = "failed";
      }),
});

export default boardgameSlice.reducer;
