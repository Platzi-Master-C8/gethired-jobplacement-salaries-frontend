import React from 'react';
import Filter from 'Components/Filter';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Jobs from './Jobs';

const JobOffers = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h2" sx={{ mt: 4 }}>
                    Work offers
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Filter />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Jobs />
            </Grid>
        </Grid>
    );
};

export default JobOffers;
