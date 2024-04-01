import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getBoardgameById } from "../../utils/boardgameAPI";
import type { SingleGameInfo } from "../../utils/types";

interface initialState {
  boardgameInfo: SingleGameInfo;
  boardgameLoadingStatus: "idle" | "pending" | "succeed" | "failed";
}

const initialGameInfo: SingleGameInfo = {
  id: "",
  type: "",
  title: "",
  description: "",
  thumbnail: "",
  year: "",
  image: "",
  minAge: "",
  playtime: "",
  maxPlaytime: "",
  minPlaytime: "",
  maxPlayers: "",
  minPlayers: "",
  statistics: {
    averageRating: "",
    ranks: [],
    userRated: "",
  },
  comments: [],
};

const initialState: initialState = {
  boardgameLoadingStatus: "idle",
  boardgameInfo: initialGameInfo,
};

export const fetchBoardgame = createAsyncThunk(
  "boardgame/fetchBoardgame",
  async (id: number) => {
    try {
      const response = (await getBoardgameById(id)) as SingleGameInfo;
      return response;
    } catch (err) {
      console.log(err);
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
        state.boardgameInfo = action.payload as SingleGameInfo;
        state.boardgameLoadingStatus = "succeed";
      })
      .addCase(fetchBoardgame.rejected, (state) => {
        state.boardgameLoadingStatus = "failed";
      }),
});

export default boardgameSlice.reducer;
