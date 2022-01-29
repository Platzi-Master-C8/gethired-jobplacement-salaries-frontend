import { get, post } from './http';

const API_URL = process.env.SALARIES_API_URL;

export const getListByName = (name) => {
    const lists = {
        english: {
            title: 'English Levels accordingly to CEFR',
            texts: [
                { level: 'A1', description: 'Can understand and use familiar everyday expressions and very basic phrases.' },
                { level: 'A2', description: 'Can understand sentences and frequently used expressions.' },
                { level: 'B1', description: 'Can deal with most situations likely to arise while travelling.' },
                { level: 'B2', description: 'Can interact with a degree of fluency with native speakers.' },
                { level: 'C1', description: 'Can use language effectively for social, academic and professional purposes.' },
                { level: 'C2', description: 'Can understand with ease virtually everything heard or read.' }
            ],
            infoLink: 'https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages',
        },
        seniority: {
            title: 'Seniority levels',
            texts: [
                { level: 'Junior', description: '0-3 years of experience. Some knowledge of the language and technology stack.' },
                { level: 'Junior-Mid', description: 'Between junior and Mid-level' },
                { level: 'Mid', description: '1-3 years of experience. Good working knowledge of the language and technology stack.' },
                { level: 'Mid-Senior', description: 'Between Mid-level and Senior' },
                { level: 'Senior', description: '3+ years of experience. Mastery of the language and tech stack.' },
            ],
            infoLink: 'https://medium.com/javascript-scene/what-is-the-difference-between-a-junior-and-a-senior-developer-63c1594d7a98',
        }
    };

    if (Object.keys(lists).includes(name)) {
        return lists[name];
    }

    return get(`${API_URL}${name}`);
};

export const getSalaryProfile = (name, body) => {
    return post(`${API_URL}${name}`, JSON.stringify(body));
};
