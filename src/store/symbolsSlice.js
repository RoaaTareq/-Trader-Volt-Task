import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSymbols } from '../services/apiService';

export const fetchSymbolsAsync = createAsyncThunk(
  'symbols/fetchSymbols',
  async (clientId) => {
    const response = await fetchSymbols(clientId);
    return response;
  }
);

const symbolsSlice = createSlice({
  name: 'symbols',
  initialState: {
    symbols: [],
    status: 'idle', // 'idle', 'loading', 'failed'
  },
  reducers: {
    updateSymbol: (state, action) => {
      const { symbolID, bid, ask, high, low } = action.payload;
      const index = state.symbols.findIndex(symbol => symbol.id === symbolID);
      if (index >= 0) {
        state.symbols[index] = { ...state.symbols[index], bid, ask, high, low };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymbolsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSymbolsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.symbols = action.payload;
      })
      .addCase(fetchSymbolsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { updateSymbol } = symbolsSlice.actions;

export default symbolsSlice.reducer;
