import { configureStore } from '@reduxjs/toolkit';
import symbolsReducer from './symbolsSlice';
import webSocketReducer from './webSocketSlice';

export const store = configureStore({
  reducer: {
    symbols: symbolsReducer,
    webSocket: webSocketReducer,
  },
});
