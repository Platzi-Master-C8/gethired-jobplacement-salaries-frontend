import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Typography, Card, Autocomplete, TextField, Grid } from '@mui/material';

import Select from 'Components/Commons/Select';

import { selectTechnologies, selectJobs, selectSeniority } from 'App/ListData/selectors';

import { fetchListData } from 'App/ListData/slice';

import { getListByName } from 'Services/salaries';
import { englishInfo, seniorityInfo } from 'Constants';
import { InfoTooltip } from 'Components/Commons/InfoTooltip/InfoTooltip';

const FormCard = ({ onChange, title, values, listTechnologies, listJobs, listSenority, children, addListData }) => {
    const { title_id, technologies, seniority, english_level } = values;
    const [ListEnglish, setListEnglish] = useState([]);

    const handleTechnologies = (e, value) => onChange(e, value, 'technologies');
    const handleTitle = (e, value) => onChange(e, value, 'title_id');

    useEffect(() => {
        addListData();
        setListEnglish(getListByName('english'));
    }, [addListData]);

    return (
        <Card sx={{ pr: 4, pl: 0, pt: 4, pb: 2, boxShadow: 3, mt: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="end">
                <Grid item xs={10.5}>
                    {!!title && <Typography variant="h2">{title}</Typography>}
                </Grid>
                <Grid item xs={10.5}>
                    <Autocomplete
                        sx={{ my: 1 }}
                        options={listJobs}
                        isOptionEqualToValue={(option, value) => option === value}
                        onChange={handleTitle}
                        value={title_id}
                        renderInput={(params) => <TextField {...params} variant="filled" label="Job Title" />}
                    />
                </Grid>
                <Grid item xs={10.5}>
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
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="end">
                    <Grid item sx={{ mr: 1 }} xs={1} sm={1}>
                        <InfoTooltip {...seniorityInfo} />
                    </Grid>
                    <Grid item xs={10.5}>
                        <Select
                            label="Seniority"
                            value={seniority}
                            onChange={onChange}
                            id="label-seniority"
                            name="seniority"
                            options={listSenority}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="end">
                    <Grid item sx={{ mr: 1 }} xs={1} sm={1}>
                        <InfoTooltip {...englishInfo} />
                    </Grid>
                    <Grid item xs={10.5}>
                        <Select
                            label="English Level"
                            value={english_level}
                            onChange={onChange}
                            id="label-englishLevel"
                            name="english_level"
                            options={ListEnglish}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container direction="row" alignItems="center" justifyContent="end">
                <Grid item xs={10.5}>
                    {children}
                </Grid>
            </Grid>
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
