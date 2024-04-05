import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getTop50Boargames } from "../../utils/boardgameAPI";

import type { HotItemInfo } from "../../utils/types";

type hotListState = {
  hotList: HotItemInfo[];
  hotListLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: hotListState = {
  hotList: [],
  hotListLoadingStatus: "idle",
};

export const fetchHotList = createAsyncThunk(
  "boardgames/fetchHotList",
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

const hotListSlice = createSlice({
  name: "hotList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotList.pending, (state) => {
        state.hotListLoadingStatus = "pending";
      })
      .addCase(fetchHotList.fulfilled, (state, action) => {
        state.hotList = action.payload as HotItemInfo[];
        state.hotListLoadingStatus = "succeeded";
      })
      .addCase(fetchHotList.rejected, (state) => {
        state.hotListLoadingStatus = "failed";
      });
  },
});

export default hotListSlice.reducer;
