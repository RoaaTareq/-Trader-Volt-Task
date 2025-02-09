// /src/store/webSocketSlice.js

import { createSlice } from "@reduxjs/toolkit";

const webSocketSlice = createSlice({
  name: "webSocket",
  initialState: {
    updates: [],
  },
  reducers: {
    updateSymbolData: (state, action) => {
      const updatedData = action.payload;
      const index = state.updates.findIndex(
        (symbol) => symbol.symbolID === updatedData.symbolID
      );
      if (index !== -1) {
        state.updates[index] = updatedData;
      } else {
        state.updates.push(updatedData);
      }
    },
  },
});

export const { updateSymbolData } = webSocketSlice.actions;

export default webSocketSlice.reducer;
