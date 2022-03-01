import { post } from 'Services/http';

const API_URL = process.env.COMPANIES_API_URL;

export const getJobs = async (params) => {
    const { data } = await post(`${API_URL}filter`, JSON.stringify(params));
    const statusActive = data?.filter((vacancy) => vacancy.status === true);
    return statusActive;
};
