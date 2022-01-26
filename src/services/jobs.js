import { API_URL_MOOK } from 'Constants';
import { get } from 'Services/http';

export const getJobs = () => {
  return get(`${API_URL_MOOK}/api/vacancies`);
};
