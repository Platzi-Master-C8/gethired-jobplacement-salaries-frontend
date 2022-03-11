import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import Select from 'Components/Commons/Select';
import { InfoTooltip } from 'Components/Commons/InfoTooltip/InfoTooltip';

import {
    selectTechnologies,
    selectJobs,
    selectSeniority,
    selectEnglish,
    selectLoading,
    selectError,
} from 'App/ListData/selectors';
import { fetchListData } from 'App/ListData/slice';
import FormCardSkeleton from './FormCardSkeleton';

const FormCard = ({
    onChange,
    title,
    values,
    listTechnologies,
    listJobs,
    listSeniority,
    listEnglish,
    children,
    addListData,
    loading,
    error,
}) => {
    const { title_name, technologies, seniority, english_level } = values;

    const handleTechnologies = (e, value) => onChange(e, value, 'technologies');
    const handleTitle = (e, value) => onChange(e, value, 'title_name');

    useEffect(() => {
        addListData();
    }, [addListData]);

    return (
        <Card sx={{ pr: 4, pl: 0, pt: 4, pb: 2, boxShadow: 3, mt: 2 }}>
            {error && (
                <Typography sx={{ mb: 2, px: 4, textAlign: 'center', display: 'block' }} variant="p">
                    Not found data, try again 😢
                </Typography>
            )}
            {loading && !error && <FormCardSkeleton />}
            {!loading && (
                <Fragment>
                    <Grid container spacing={2} alignItems="center" justifyContent="end">
                        <Grid item xs={10.5}>
                            {!!title && <Typography variant="h2">{title}</Typography>}
                        </Grid>
                        <Grid item xs={10.5}>
                            <Autocomplete
                                freeSolo
                                sx={{ my: 1 }}
                                options={listJobs}
                                isOptionEqualToValue={(option, value) => option === value}
                                onChange={handleTitle}
                                value={title_name}
                                renderInput={(params) => <TextField {...params} variant="filled" label="Job Title" />}
                            />
                        </Grid>
                        <Grid item xs={10.5}>
                            <Autocomplete
                                multiple
                                freeSolo
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
                                renderInput={(params) => (
                                    <TextField {...params} variant="filled" label="Technologies" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} container alignItems="center" justifyContent="end">
                            <Grid item sx={{ mr: 1 }} xs={1} sm={1}>
                                <InfoTooltip {...listSeniority} />
                            </Grid>
                            <Grid item xs={10.5}>
                                <Select
                                    label="Seniority"
                                    value={seniority || ''}
                                    onChange={onChange}
                                    id="label-seniority"
                                    name="seniority"
                                    options={listSeniority.texts.map(({ level }) => level)}
                                >
                                    {listSeniority.texts?.map(({ level }, key) => (
                                        <MenuItem key={level} value={Number(key + 1)}>
                                            {level}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} container alignItems="center" justifyContent="end">
                            <Grid item sx={{ mr: 1 }} xs={1} sm={1}>
                                <InfoTooltip {...listEnglish} />
                            </Grid>
                            <Grid item xs={10.5}>
                                <Select
                                    label="English Level"
                                    value={english_level}
                                    onChange={onChange}
                                    id="label-englishLevel"
                                    name="english_level"
                                    options={listEnglish.texts.map(({ level }) => level)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container direction="row" alignItems="center" justifyContent="end">
                        <Grid item xs={10.5}>
                            {children}
                        </Grid>
                    </Grid>
                </Fragment>
            )}
        </Card>
    );
};

FormCard.propTypes = {
    loading: PropTypes.bool.isRequired,
    values: PropTypes.shape({
        title_name: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
        seniority: PropTypes.number,
        english_level: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
    listTechnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    listJobs: PropTypes.arrayOf(PropTypes.string).isRequired,
    listSeniority: PropTypes.shape({
        title: PropTypes.string,
        texts: PropTypes.arrayOf(PropTypes.shape({ level: PropTypes.string, description: PropTypes.string })),
        infoLink: PropTypes.string,
    }).isRequired,
    listEnglish: PropTypes.shape({
        title: PropTypes.string,
        texts: PropTypes.arrayOf(PropTypes.shape({ level: PropTypes.string, description: PropTypes.string })),
        infoLink: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
    addListData: PropTypes.func.isRequired,
    error: PropTypes.string,
};

FormCard.defaultProps = {
    title: null,
    children: null,
    error: null,
};

const mapStateToProps = (state) => ({
    listTechnologies: selectTechnologies(state),
    listJobs: selectJobs(state),
    listSeniority: selectSeniority(state),
    listEnglish: selectEnglish(state),
    loading: selectLoading(state),
    error: selectError(state),
});

const mapDispatchToProps = (dispatch) => ({
    addListData: () => dispatch(fetchListData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCard);
