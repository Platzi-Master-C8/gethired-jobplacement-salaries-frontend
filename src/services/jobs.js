import { get } from 'Services/http';

const API_URL = process.env.COMPANIES_API_URL;

export const getJobs = async () => {
    const { data } = await get(`${API_URL}vacancies`);
    const vacancies = data
        .map((element) => {
            let list = [];
            list = list.concat(element.vacancies);
            return list;
        })
        .flat();
    return vacancies;
};
