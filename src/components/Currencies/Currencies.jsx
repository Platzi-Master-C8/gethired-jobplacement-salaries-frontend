import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Skeleton from '@mui/material/Skeleton';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { changeCurrency } from 'App/CalculateSalary/slice';
import { selectCurrency } from 'App/CalculateSalary/selectors';

import { selectListCurrencies, selectLoading, selectError } from 'App/ListData/selectors';

const Currencies = ({ handleCurrency, currency, listCurrencies, error, loading }) => {
    const handleCurrencies = (_, values) => handleCurrency(values);
    if (error) return null;
    return (
        <Fragment>
            {loading && !error && <Skeleton variant="rectangular" height={56} />}
            {!loading && (
                <Autocomplete
                    value={currency}
                    disableClearable
                    options={listCurrencies}
                    onChange={handleCurrencies}
                    isOptionEqualToValue={(option, value) => option === value}
                    renderInput={(params) => <TextField {...params} variant="filled" label="Selected currency" />}
                />
            )}
        </Fragment>
    );
};

Currencies.defaultProps = {
    error: null,
};

Currencies.propTypes = {
    handleCurrency: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    listCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    currency: selectCurrency(state),
    listCurrencies: selectListCurrencies(state),
    loading: selectLoading(state),
    error: selectError(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleCurrency: (data) => dispatch(changeCurrency(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
