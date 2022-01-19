import {API_URL_MOOK} from 'Constants';

export const getJobs = () => {
  fetch(`${API_URL_MOOK}/api/vacancies`).then(res => res.json()).then(data => {
    return data;
  })
}
