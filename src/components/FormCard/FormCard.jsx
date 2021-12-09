import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';

import Select from 'Components/commons/Select/Select';

import { ListJobs, ListTechonologies, ListSenority, ListEnglish } from 'Constants';

const FormCard = ({ onChange, title, values }) => {
    const { jobTitle, technologies, senority, englishLevel } = values;
    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            {!!title && (
                <Typography sx={{ mb: 2 }} variant="h2">
                    {title}
                </Typography>
            )}
            <Select
                label="Job Title"
                value={jobTitle}
                onChange={onChange}
                id="label-job"
                name="jobTitle"
                options={ListJobs}
            />
            <Select
                label="Technologies"
                value={technologies}
                onChange={onChange}
                id="label-technologies"
                name="technologies"
                options={ListTechonologies}
                multiple
            />
            <Select
                label="Senority"
                value={senority}
                onChange={onChange}
                id="label-senority"
                name="senority"
                options={ListSenority}
            />
            <Select
                label="English Level"
                value={englishLevel}
                onChange={onChange}
                id="label-englishLevel"
                name="englishLevel"
                options={ListEnglish}
            />
        </Card>
    );
};

FormCard.propTypes = {
    values: PropTypes.shape({
        jobTitle: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        senority: PropTypes.string.isRequired,
        englishLevel: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
};

FormCard.defaultProps = {
    title: null,
};

export default FormCard;
