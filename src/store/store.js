// /src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import symbolsReducer from "./symbolsSlice";
import webSocketReducer from "./webSocketSlice";

const store = configureStore({
  reducer: {
    symbols: symbolsReducer,
    webSocket: webSocketReducer,
  },
});

export default store;
