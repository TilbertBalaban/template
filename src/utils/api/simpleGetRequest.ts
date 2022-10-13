import axios from 'axios';
import { IVehicle } from 'models/IVehicle';

import { STAR_WARS_API_URL } from './consts';

export const simpleGetRequest = () => {
  return axios
    .get<{
      results: IVehicle[];
    }>(`${STAR_WARS_API_URL}vehicles/`)
    .then((data) => {
      return data?.data?.results || [];
    });
};
