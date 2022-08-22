import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStarship } from '../../models/IStarship';
import { STAR_WARS_API_URL } from '../../utils/consts';

const fetchStarships = createAsyncThunk(
  'starships/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<{
        results: IStarship[]
      }>(`${STAR_WARS_API_URL}starships/`);
      return response.data.results;
    } catch (e) {
      return thunkApi.rejectWithValue(`Request failed ${e}`);
    }
  },
);

export default fetchStarships;
