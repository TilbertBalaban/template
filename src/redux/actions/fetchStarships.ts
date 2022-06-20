import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../utils/consts';

const fetchStarships = createAsyncThunk(
  'starships/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${API_URL}starships/`);
      return response.data.results;
    } catch (e) {
      return thunkApi.rejectWithValue(`Request failed ${e}`);
    }
  },
);

export default fetchStarships;
