export const disabled = (values) => {
    const { jobTitle, technologies, senority, englishLevel } = values;
    return Boolean(!jobTitle || !technologies.length || !senority || !englishLevel);
};
