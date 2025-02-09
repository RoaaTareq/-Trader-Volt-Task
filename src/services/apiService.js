// /src/services/apiService.js

import axios from "axios";

const apiUrl = "http://57.128.175.72:8080/api/Public/Symbols";
const clientId = 77843;

export const fetchSymbols = async () => {
  try {
    const response = await axios.post(apiUrl, { clientId });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch symbols");
  }
};
