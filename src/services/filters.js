import { get } from 'Services/http';

const API_URL = process.env.COMPANIES_API_URL;

export const getListCompanies = async () => {
    const data = await get(`${API_URL}companies/select`);
    return data.data;
};

export const getListTypeWork = async () => {
    const data = await get(`${API_URL}types-work`);
    return data.data;
};

export const getListLocations = async () => {
    const data = await get(`${API_URL}vacancies-job-location`);
    return data;
};
