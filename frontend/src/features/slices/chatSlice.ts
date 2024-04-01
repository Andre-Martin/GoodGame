import { createSlice } from "@reduxjs/toolkit";

import type { chatState } from "../../utils/types";

import { chatMockInfo } from "../../utils/mockInfo";

const initialState: chatState = {
  ...chatMockInfo,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { sendMessage } = chatSlice.actions;
export default chatSlice.reducer;
