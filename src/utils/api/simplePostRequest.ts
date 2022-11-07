import axios from 'axios';
import { IPost } from 'models/IPost';

import { JSON_PLACEHOLDER_API_URL } from './consts';

export const simplePostRequest = (body: IPost) => {
  return axios.post(`${JSON_PLACEHOLDER_API_URL}posts/`, body);
};
