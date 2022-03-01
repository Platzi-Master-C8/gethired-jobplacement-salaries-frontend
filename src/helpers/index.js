export const disabled = (values) => {
    const { title_name, technologies, seniority, english_level } = values;
    return Boolean(!title_name || !technologies.length || !seniority || !english_level);
};

export const helpCurrency = (number) => `$ ${Intl.NumberFormat().format(number)}`;
