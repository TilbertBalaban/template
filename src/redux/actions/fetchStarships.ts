import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/consts';

const fetchStarships = createAsyncThunk(
  'starships/fetchAll',
  async () => {
    const response = await axios.get(`${API_URL}starships/`);
    return response.data.results;
  },
);

export default fetchStarships;
