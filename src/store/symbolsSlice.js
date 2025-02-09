// /src/store/symbolsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSymbols } from "../services/apiService";

export const fetchSymbolsData = createAsyncThunk(
  "symbols/fetchSymbols",
  async () => {
    const data = await fetchSymbols();
    return data;
  }
);

const symbolsSlice = createSlice({
  name: "symbols",
  initialState: {
    symbols: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymbolsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSymbolsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.symbols = action.payload;
      })
      .addCase(fetchSymbolsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default symbolsSlice.reducer;
