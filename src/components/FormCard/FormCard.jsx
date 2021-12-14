import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Card, Chip, Box } from '@mui/material';

import Select from 'Components/Commons/Select';

import { selectTechnologies, selectJobs } from 'App/ListData/selectors';

import { ListSenority, ListEnglish } from 'Constants';

const FormCard = ({ onChange, title, values, listTechnologies, listJobs, children, onDelete }) => {
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
                options={listJobs}
            />
            <Select
                label="Technologies"
                value={technologies}
                onChange={onChange}
                id="label-technologies"
                name="technologies"
                options={listTechnologies}
                multiple
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                variant="outlined"
                                onDelete={(event) => onDelete(event, value, 'technologies')}
                                onMouseDown={(event) => event.stopPropagation()}
                            />
                        ))}
                    </Box>
                )}
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
            {children}
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
    children: PropTypes.node,
    listTechnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    listJobs: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    title: PropTypes.string,
};

FormCard.defaultProps = {
    title: null,
    children: null,
};

const mapStateToProps = (state) => ({
    listTechnologies: selectTechnologies(state),
    listJobs: selectJobs(state),
});

export default connect(mapStateToProps, null)(FormCard);
