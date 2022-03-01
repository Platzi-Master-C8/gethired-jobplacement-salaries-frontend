import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const JobSkeleton = () => {
    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12}>
                    <Typography variant="h1">
                        <Skeleton />
                    </Typography>
                    <Typography variant="body1">
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

const GroupSkeleton = () => (
    <Fragment>
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
        <JobSkeleton />
    </Fragment>
);

export default GroupSkeleton;
