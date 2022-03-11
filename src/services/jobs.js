import axios from 'axios';

const API_URL = process.env.COMPANIES_API_URL;

export const getJobs = async (params) => {
    const {
        data: { data },
    } = await axios.post(`${API_URL}filter`, null, { params });
    const statusActive = data?.filter((vacancy) => vacancy.status === true);
    return statusActive;
};
