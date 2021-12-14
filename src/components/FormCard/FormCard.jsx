import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Card, Chip, Box } from '@mui/material';

import Select from 'Components/Commons/Select';

import { selectTechnologies, selectJobs } from 'App/ListData/selectors';

import { ListSenority, ListEnglish } from 'Constants';

const FormCard = ({ onChange, title, values, listTechnologies, listJobs, children, onDelete }) => {
    const { title_id, technologies, seniority, english_level } = values;

    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            {!!title && (
                <Typography sx={{ mb: 2 }} variant="h2">
                    {title}
                </Typography>
            )}
            <Select
                label="Job Title"
                value={title_id}
                onChange={onChange}
                id="label-job"
                name="title_id"
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
                                color="primary"
                                onDelete={(event) => onDelete(event, value, 'technologies')}
                                onMouseDown={(event) => event.stopPropagation()}
                            />
                        ))}
                    </Box>
                )}
            />
            <Select
                label="Senority"
                value={seniority}
                onChange={onChange}
                id="label-senority"
                name="seniority"
                options={ListSenority}
            />
            <Select
                label="English Level"
                value={english_level}
                onChange={onChange}
                id="label-englishLevel"
                name="english_level"
                options={ListEnglish}
            />
            {children}
        </Card>
    );
};

FormCard.propTypes = {
    values: PropTypes.shape({
        title_id: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
        seniority: PropTypes.string,
        english_level: PropTypes.string,
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
