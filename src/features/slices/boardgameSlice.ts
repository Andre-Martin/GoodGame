import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardgameById } from "../../utils/boardgameAPI";
import type { SingleGameInfo } from "../../utils/types";

const initialBoardgameInfo: SingleGameInfo = {
  id: "",
  type: "",
  title: "",
  description: "",
  thumbnail: "",
  image: "",
  year: "",
  alternativeNames: [],
  statistics: {
    averageRating: "",
    complexity: "",
    buyersAverage: "",
    median: "",
    totalComments: "",
    complexityRated: "",
    owned: "",
    stddev: "",
    trading: "",
    usersRated: "",
    wishing: "",
    wanting: "",
    ranks: [],
  },
  comments: [],
  links: {
    categories: [],
    designers: [],
    artists: [],
    publishers: [],
    mechanics: [],
    families: [],
    accessories: [],
    implementations: [],
    expansions: [],
    compilations: [],
  },
  videos: [],
  marketplace: [],
  minAge: "",
  playtime: "",
  maxPlaytime: "",
  minPlaytime: "",
  maxPlayers: "",
  minPlayers: "",
};

interface initialState {
  boardgameInfo: SingleGameInfo;
  boardgameLoadingStatus: "idle" | "pending" | "succeed" | "failed";
}

const initialState: initialState = {
  boardgameLoadingStatus: "idle",
  boardgameInfo: initialBoardgameInfo,
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
