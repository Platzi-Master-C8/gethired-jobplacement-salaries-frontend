import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Autocomplete, TextField } from '@mui/material';

import { changeCurrency } from 'App/CalculateSalary/slice';
import { selectCurrency } from 'App/CalculateSalary/selectors';

import { selectListCurrencies } from 'App/ListData/selectors';

const Currencies = ({ handleCurrency, currency, listCurrencies }) => {
    const handleCurrencies = (_, values) => handleCurrency(values);

    return (
        <Autocomplete
            value={currency}
            disableClearable
            options={listCurrencies}
            onChange={handleCurrencies}
            isOptionEqualToValue={(option, value) => option === value}
            renderInput={(params) => <TextField {...params} variant="filled" label="Selected currency" />}
        />
    );
};

Currencies.propTypes = {
    handleCurrency: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    listCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
    currency: selectCurrency(state),
    listCurrencies: selectListCurrencies(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleCurrency: (data) => dispatch(changeCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
