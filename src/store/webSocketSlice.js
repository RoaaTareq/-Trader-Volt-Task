import { createSlice } from '@reduxjs/toolkit';

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState: {
    connected: false,
  },
  reducers: {
    setWebSocketStatus: (state, action) => {
      state.connected = action.payload;
    }
  }
});

export const { setWebSocketStatus } = webSocketSlice.actions;

export default webSocketSlice.reducer;
