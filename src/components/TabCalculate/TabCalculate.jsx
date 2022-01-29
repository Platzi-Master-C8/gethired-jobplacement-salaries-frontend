import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';
import LoadingButton from '@mui/lab/LoadingButton';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';
import Select from 'Components/Commons/Select';

import { changesForm, clearFormMain, fetchChartData, changeCurrency } from 'App/CalculateSalary/slice';
import {
    selectFormMain,
    selectChartData,
    selectLoadingFormCalculate,
    selectCurrency,
} from 'App/CalculateSalary/selectors';

import { selectListCurrencies } from 'App/ListData/selectors';

import { disabled } from 'Helpers';

const TabCalculate = ({
    handleCalculate,
    formCalculate,
    clearForm,
    addChartData,
    chartData,
    handleCurrency,
    currency,
    listCurrencies,
    loadingFormCalculate,
}) => {
    const isDisabled = disabled(formCalculate);

    const handleSelectCalculate = (e, values, nameAuto) => {
        if (nameAuto) {
            handleCalculate({ [nameAuto]: values });
        } else {
            const { name, value } = e.target;
            handleCalculate({ [name]: value });
        }
    };

    const handleSubmit = () => {
        addChartData(formCalculate);
    };

    const handleCurrencies = (e) => handleCurrency(e.target.value);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <FormCard values={formCalculate} onChange={handleSelectCalculate} title="Calculate Salary">
                    <LoadingButton
                        sx={{ mt: 2 }}
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        disabled={isDisabled}
                        loading={loadingFormCalculate}
                    >
                        Calculate Salary
                    </LoadingButton>
                    <Button onClick={clearForm} sx={{ mt: 2, display: 'flex', justifyContent: 'center', mx: 'auto' }}>
                        Clear form
                    </Button>
                </FormCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <NormalDistributionChart values={chartData} currencyName={currency} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Select
                        label="Selected currency"
                        fullWidth={false}
                        value={currency}
                        id="currency"
                        name="currency"
                        width={200}
                        options={listCurrencies}
                        onChange={handleCurrencies}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

TabCalculate.propTypes = {
    clearForm: PropTypes.func.isRequired,
    handleCalculate: PropTypes.func.isRequired,
    formCalculate: PropTypes.shape({
        english_level: PropTypes.string,
        seniority: PropTypes.string,
        is_remote: PropTypes.bool,
        location: PropTypes.string,
        title_id: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    addChartData: PropTypes.func.isRequired,
    chartData: PropTypes.arrayOf(
        PropTypes.shape({
            average: PropTypes.number,
            top: PropTypes.number,
            bottom: PropTypes.number,
        }),
    ),
    handleCurrency: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    loadingFormCalculate: PropTypes.bool.isRequired,
    listCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TabCalculate.defaultProps = {
    chartData: [
        {
            average: 0,
            top: 0,
            bottom: 0,
        },
    ],
};

const mapStateToProps = (state) => ({
    formCalculate: selectFormMain(state),
    chartData: selectChartData(state),
    currency: selectCurrency(state),
    listCurrencies: selectListCurrencies(state),
    loadingFormCalculate: selectLoadingFormCalculate(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleCalculate: (data) => dispatch(changesForm({ changes: data })),
    clearForm: () => dispatch(clearFormMain()),
    addChartData: (data) => dispatch(fetchChartData(data)),
    handleCurrency: (data) => dispatch(changeCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabCalculate);
