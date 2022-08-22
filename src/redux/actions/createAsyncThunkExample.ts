import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStarship } from '../../models/IStarship';
import { STAR_WARS_API_URL } from '../../utils/consts';

const url = `${STAR_WARS_API_URL}starships/`;

export const fetchItems = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<{
        results: IStarship[]
      }>(url);
      return response.data.results;
    } catch (e) {
      return thunkApi.rejectWithValue(`Request failed ${e}`);
    }
  },
);
