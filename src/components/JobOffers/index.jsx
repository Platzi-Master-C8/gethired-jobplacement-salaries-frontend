import React, { Fragment } from 'react';
import Filter from 'Components/Filter';
import { Grid } from '@mui/material';
import Jobs from './Jobs';

const JobOffers = () => {
    return (
        <Fragment>
            <Grid item xs={12} sm={12} md={4}>
                <Filter />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Jobs />
            </Grid>
        </Fragment>
    );
};

export default JobOffers;
