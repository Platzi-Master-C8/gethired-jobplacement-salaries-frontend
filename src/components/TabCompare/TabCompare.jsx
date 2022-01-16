import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Switch } from '@master-c8/icons';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { currencyName } from 'Constants';
import { fetchComparisonChartData, changesForm, changesFormComparison } from 'App/CalculateSalary/slice';
import { selectComparisonChartData, selectFormComparison, selectFormMain } from 'App/CalculateSalary/selectors';

const TabCompare = ({
    addChartData,
    comparisonChartData,
    formMain,
    formComparison,
    handleCalculate,
    handleCompare,
}) => {
    const handleSelectMain = (e, values, nameAuto) => {
        if (nameAuto) {
            handleCalculate({ [nameAuto]: values });
        } else {
            const { name, value } = e.target;
            handleCalculate({ [name]: value });
        }
    };

    const handleSelectComparison = (e, values, nameAuto) => {
        if (nameAuto) {
            handleCompare({ [nameAuto]: values });
        } else {
            const { name, value } = e.target;
            handleCompare({ [name]: value });
        }
    };

    const handleSubmit = () => {
        addChartData([formMain, formComparison]);
    };

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                    <FormCard values={formMain} onChange={handleSelectMain} title="Primary Profile" />
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ display: 'grid', placeItems: 'center', mt: { xs: 1 } }}>
                    <Switch
                        sx={{ fontSize: { sm: 60, md: 80 }, transform: { xs: 'rotate(90deg)', md: 'none' } }}
                        color="primary"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <FormCard values={formComparison} onChange={handleSelectComparison} title="Secondary Profile" />
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

const profileShape = {
    english_level: PropTypes.string,
    seniority: PropTypes.string,
    is_remote: PropTypes.bool,
    location: PropTypes.string,
    title_id: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
};

TabCompare.propTypes = {
    addChartData: PropTypes.func.isRequired,
    comparisonChartData: PropTypes.arrayOf(
        PropTypes.shape({
            average: PropTypes.number,
            top: PropTypes.number,
            bottom: PropTypes.number,
        }),
    ),
    formMain: PropTypes.shape(profileShape).isRequired,
    formComparison: PropTypes.shape(profileShape).isRequired,
    handleCalculate: PropTypes.func.isRequired,
    handleCompare: PropTypes.func.isRequired,
};

TabCompare.defaultProps = {
    comparisonChartData: [
        {
            average: 0,
            top: 0,
            bottom: 0,
        },
    ],
};

const mapStateToProps = (state) => ({
    comparisonChartData: selectComparisonChartData(state),
    formMain: selectFormMain(state),
    formComparison: selectFormComparison(state),
});

const mapDispatchToProps = (dispatch) => ({
    addChartData: (data) => dispatch(fetchComparisonChartData(data)),
    handleCalculate: (data) => dispatch(changesForm({ changes: data })),
    handleCompare: (data) => dispatch(changesFormComparison({ changes: data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabCompare);
