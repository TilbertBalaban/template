import axios from 'axios';
import { STAR_WARS_API_URL } from '../api/consts';

export const asyncFunction = async () => {
  try {
    const { data } = await axios.get(`${STAR_WARS_API_URL}vehicles/`);
    return data.count;
  } catch (e) {
    return e;
  }
};
