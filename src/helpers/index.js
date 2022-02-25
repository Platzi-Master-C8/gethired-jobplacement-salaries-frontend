export const disabled = (values) => {
    const { title_id, technologies, seniority, english_level } = values;
    return Boolean(!title_id || !technologies.length || !seniority || !english_level);
};
