import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

import { selectSnackbarShow } from 'App/CalculateSalary/selectors';
import { closeSnackbar } from 'App/CalculateSalary/slice';

const SnackbarMessage = ({ snackbarShow, handleCloseSnackbar }) => {
    return (
        <Snackbar open={snackbarShow} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }} variant="filled">
                Something went wrong. If the problem persists please contact support
            </Alert>
        </Snackbar>
    );
};

SnackbarMessage.propTypes = {
    snackbarShow: PropTypes.bool.isRequired,
    handleCloseSnackbar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    snackbarShow: selectSnackbarShow(state),
});

const mapDispatchToProps = (dispatch) => ({
    handleCloseSnackbar: () => dispatch(closeSnackbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarMessage);
