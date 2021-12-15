import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import JobOffer from 'Components/JobOffer';
import Filter from 'Components/Filter';
import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { values1, currencyName } from 'Constants';

import { changesForm, clearFormMain, deleteChip } from 'App/CalculateSalary/slice';
import { selectFormMain } from 'App/CalculateSalary/selectors';

import { disabled } from 'Helpers';

const TabCalculate = ({ handleCalculate, formCalculate, clearForm, handleDelete }) => {
    const isDisabled = disabled(formCalculate);

    const handleSelectCalculate = (e) => {
        const { name, value } = e.target;
        handleCalculate({
            [name]: value,
        });
    };

    const handleSubmit = () => {
        alert(JSON.stringify(formCalculate, null, 2));
    };

    const handleDeleteChip = (_, value) => handleDelete(value);

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormCard
                        values={formCalculate}
                        onChange={handleSelectCalculate}
                        title="Calculate Salary"
                        onDelete={handleDeleteChip}
                    >
                        <Button
                            sx={{ mt: 2 }}
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={handleSubmit}
                            disabled={isDisabled}
                        >
                            Calculate Salary
                        </Button>
                        <Button
                            onClick={clearForm}
                            sx={{ mt: 2, display: 'flex', justifyContent: 'center', mx: 'auto' }}
                        >
                            Clear form
                        </Button>
                    </FormCard>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <NormalDistributionChart values={values1} currencyName={currencyName} />
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={12} md={4}>
                    <Filter />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <JobOffer />
                </Grid>
            </Grid>
        </Fragment>
    );
};

TabCalculate.propTypes = {
    clearForm: PropTypes.func.isRequired,
    handleCalculate: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    formCalculate: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
    formCalculate: selectFormMain(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleCalculate: (data) => dispatch(changesForm({ changes: data })),
    clearForm: () => dispatch(clearFormMain()),
    handleDelete: (value) => dispatch(deleteChip(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabCalculate);
