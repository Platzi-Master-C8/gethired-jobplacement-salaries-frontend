import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Switch } from '@master-c8/icons';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { initialValues, currencyName } from 'Constants';
import { fetchComparisonChartData } from '../../app/CalculateSalary/slice';
import { selectComparisonChartData } from '../../app/CalculateSalary/selectors';

const TabCompare = ({ addChartData, comparisonChartData }) => {
    const [formPrimary, setFormPrimary] = useState(initialValues);
    const [formSecondary, setFormSecondary] = useState(initialValues);

    const handleSelectPrimary = (e) => {
        const { name, value } = e.target;
        setFormPrimary((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectSecondary = (e) => {
        const { name, value } = e.target;
        setFormSecondary((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDeleteChipPrimary = (_, value, name) => {
        setFormPrimary((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((chip) => chip !== value),
        }));
    };

    const handleDeleteChipSecondary = (_, value, name) => {
        setFormSecondary((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((chip) => chip !== value),
        }));
    };

    const handleSubmit = () => {
        addChartData();
    };

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                    <FormCard
                        values={formPrimary}
                        onChange={handleSelectPrimary}
                        title="Primary Profile"
                        onDelete={handleDeleteChipPrimary}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ display: 'grid', placeItems: 'center', mt: { xs: 1 } }}>
                    <Switch
                        sx={{ fontSize: { sm: 60, md: 80 }, transform: { xs: 'rotate(90deg)', md: 'none' } }}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <FormCard
                        values={formSecondary}
                        onChange={handleSelectSecondary}
                        title="Secondary Profile"
                        onDelete={handleDeleteChipSecondary}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button variant="contained" fullWidth size="large" onClick={handleSubmit}>
                        Compare salary
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                    <NormalDistributionChart values={comparisonChartData} currencyName={currencyName} />
                </Grid>
            </Grid>
        </Fragment>
    );
};

TabCompare.propTypes = {
    addChartData: PropTypes.func.isRequired,
    comparisonChartData: PropTypes.arrayOf(
        PropTypes.shape({
            english_level: PropTypes.string.isRequired,
            seniority: PropTypes.number.isRequired,
            is_remote: PropTypes.bool.isRequired,
            location: PropTypes.string.isRequired,
            title_id: PropTypes.string.isRequired,
            technologies: PropTypes.arrayOf(PropTypes.string),
        }),
    ).isRequired,
};

const mapStateToProps = (state) => ({
    comparisonChartData: selectComparisonChartData(state),
});

const mapDispatchToProps = (dispatch) => ({
    addChartData: (data) => dispatch(fetchComparisonChartData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabCompare);
