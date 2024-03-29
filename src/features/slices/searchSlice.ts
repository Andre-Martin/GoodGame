import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchBoardGameByName, getBoardgames } from "../../utils/boardgameAPI";
import { formatIDsFromSearch } from "../../utils/common";

import type { ThingInfo } from "../../utils/types";

interface initialState {
  resultLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
  idsLoadingStatus: "idle" | "pending" | "succeeded" | "failed";
  ids: number[];
  result: ThingInfo[];
}

const initialState: initialState = {
  resultLoadingStatus: "idle",
  idsLoadingStatus: "idle",
  ids: [],
  result: [],
};

export const fetchSearchIDs = createAsyncThunk(
  "search/fetchSearchIDs",
  async (name: string) => {
    try {
      const result = await searchBoardGameByName(name);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchSearchContent = createAsyncThunk(
  "search/fetchSearchContent",
  async (ids: string) => {
    try {
      const result = await getBoardgames(0, 0, ids);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //ids
      .addCase(fetchSearchIDs.pending, (state) => {
        state.idsLoadingStatus = "pending";
        state.result = [];
      })
      .addCase(fetchSearchIDs.fulfilled, (state, action) => {
        state.ids = formatIDsFromSearch(action.payload);
        state.idsLoadingStatus = "succeeded";
        state.result = [];
      })
      .addCase(fetchSearchIDs.rejected, (state) => {
        state.idsLoadingStatus = "failed";
        state.result = [];
      })
      //result
      .addCase(fetchSearchContent.pending, (state) => {
        state.resultLoadingStatus = "pending";
        state.result = [];
      })
      .addCase(fetchSearchContent.fulfilled, (state, action) => {
        state.result = action.payload as ThingInfo[];
        state.resultLoadingStatus = "succeeded";
      })
      .addCase(fetchSearchContent.rejected, (state) => {
        state.resultLoadingStatus = "failed";
        state.result = [];
      });
  },
});

export default searchSlice.reducer;
