import axios from 'axios';
import { asyncFunction } from '../../../utils/functions/asyncFunction';

jest.mock('axios');

describe('asyncFunction', () => {
  let response;
  beforeEach(() => {
    response = {
      data: {
        count: 40,
      },
    };
  });
  test('async', async () => {
    axios.get.mockReturnValue(response);
    const result = await asyncFunction();
    expect(axios.get).toBeCalledTimes(1);
    expect(result).toBe(40);
    expect(result).toMatchSnapshot();
  });
});
