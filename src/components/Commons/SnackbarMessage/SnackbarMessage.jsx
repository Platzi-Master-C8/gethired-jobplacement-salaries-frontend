import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

// import { changesForm, clearFormMain, fetchChartData } from 'App/CalculateSalary/slice';
import { selectSnackbarShow } from 'App/CalculateSalary/selectors';

const SnackbarMessage = ({ snackbarShow }) => {
    // const [open, setOpen] = useState(true);

    console.log(snackbarShow);

    // const handleClick = () => {
    //   setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            // return;
        }

        // setOpen(false);
    };

    return (
        // <Stack spacing={2} sx={{ width: "100%" }}>
        // <Button variant="outlined" onClick={handleClick}>
        //   Open error snackbar
        // </Button>
        <Snackbar open={snackbarShow} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }} variant="filled">
                Something went wrong. If the problem persists please contact support
            </Alert>
        </Snackbar>
        // </Stack>
    );
};

SnackbarMessage.propTypes = {
    snackbarShow: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    snackbarShow: selectSnackbarShow(state),
});

// const mapDispatchToProps = (dispatch) => ({
//     handleCalculate: (data) => dispatch(changesForm({ changes: data })),
//     clearForm: () => dispatch(clearFormMain()),
//     addChartData: (data) => dispatch(fetchChartData(data)),
// });

export default connect(mapStateToProps)(SnackbarMessage);
