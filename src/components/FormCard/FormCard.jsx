import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Card, Autocomplete, TextField } from '@mui/material';

import Select from 'Components/Commons/Select';

import { selectTechnologies, selectJobs, selectSeniority } from 'App/ListData/selectors';

import { fetchListData } from 'App/ListData/slice';

import { getListByName } from 'Services/salaries';

const FormCard = ({ onChange, title, values, listTechnologies, listJobs, listSenority, children, addListData }) => {
    const { title_id, technologies, seniority, english_level } = values;
    const [ListEnglish, setListEnglish] = useState([]);

    // console.log(title_id, technologies, seniority, english_level);

    const handleTechnologies = (e, value) => onChange(e, value, 'technologies');
    const handleTitle = (e, value) => onChange(e, value, 'title_id');

    useEffect(() => {
        addListData();
        setListEnglish(getListByName('english'));
    }, [addListData]);

    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            {!!title && (
                <Typography sx={{ mb: 2 }} variant="h2">
                    {title}
                </Typography>
            )}
            <Autocomplete
                sx={{ my: 1 }}
                options={listJobs}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={handleTitle}
                value={title_id}
                renderInput={(params) => <TextField {...params} variant="filled" label="Job Title" />}
            />
            <Autocomplete
                multiple
                sx={{ my: 1 }}
                options={listTechnologies}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={handleTechnologies}
                ChipProps={{
                    color: 'primary',
                    variant: 'outlined',
                    size: 'small',
                }}
                defaultValue={[]}
                value={technologies}
                renderInput={(params) => <TextField {...params} variant="filled" label="Technologies" />}
            />
            <Select
                label="Seniority"
                value={seniority}
                onChange={onChange}
                id="label-seniority"
                name="seniority"
                options={listSenority}
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
    listSenority: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    addListData: PropTypes.func.isRequired,
};

FormCard.defaultProps = {
    title: null,
    children: null,
};

const mapStateToProps = (state) => ({
    listTechnologies: selectTechnologies(state),
    listJobs: selectJobs(state),
    listSenority: selectSeniority(state),
});

const mapDispatchToProps = (dispatch) => ({
    addListData: () => dispatch(fetchListData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCard);
