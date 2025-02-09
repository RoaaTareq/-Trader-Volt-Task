import axios from 'axios';

const API_URL = 'http://57.128.175.72:8080/api/Public/Symbols';

export const fetchSymbols = async (clientId) => {
  try {
    const response = await axios.post(API_URL, { clientId });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch symbols');
  }
};
