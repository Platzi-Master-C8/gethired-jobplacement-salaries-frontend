export const disabled = (values) => {
    const { title_name, technologies, seniority, english_level } = values;
    return Boolean(!title_name || !technologies.length || !seniority || !english_level);
};

export const helpCurrency = (number) => `$ ${Intl.NumberFormat().format(number)}`;

/* eslint-disable camelcase */
export const countPage = (data) => {
    const numberPerPage = Math.ceil(data.length / 10);
    return numberPerPage;
};

export const scrollTop = () => {
    if (window === 'undefined') return;
    window.scroll({ top: 0, behavior: 'smooth' });
};

export const helpColor = (id) => {
    const status = {
        1: 'info',
        2: 'warning',
        3: 'success',
        4: 'error',
    };
    if (status[id]) {
        return status[id];
    }

    return null;
};

export const sum = (app) => {
    const { company_id, applicant_name, id, applicant_id, created_at, ...rest } = app;
    const sumTotal = Object.keys(rest).reduce((acc, key) => acc + parseFloat(rest[key] || 0), 0);
    return (sumTotal / 7).toFixed(1);
};

export const isDisabledClear = (obj) => {
    const { is_remote, ...rest } = obj;
    const empty = Object.entries(rest).some(([, value]) => {
        if (Array.isArray(value)) {
            return !!value.length;
        }
        return !!value;
    });

    return !empty;
};
