import { FILTER } from './types';

export const filterAction = filter => {
  return { type: FILTER, payload: filter };
};
