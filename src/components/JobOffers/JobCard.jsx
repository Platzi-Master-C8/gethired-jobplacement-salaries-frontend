import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { selectCurrency } from 'App/CalculateSalary/selectors';
import { helpCurrency } from 'Helpers';

import JobDetailsModal from './JobDetailsModal';

const JobCard = ({ job, currency }) => {
    const [showDetail, setShowDetail] = useState(false);
    const handleOpenClose = () => setShowDetail(!showDetail);
    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={10}>
                    <Typography sx={{ mb: 4 }} variant="h2">
                        {job.name}
                    </Typography>
                    <Typography sx={{ mb: 4 }}>{job.description}</Typography>
                    <Typography>
                        {helpCurrency(job.salary)}
                        {currency}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={handleOpenClose} variant="contained" color="primary" size="large">
                        Details
                    </Button>
                </Grid>
            </Grid>
            <JobDetailsModal showDetail={showDetail} handleOpenClose={handleOpenClose} vacancyInfo={job} />
        </Card>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        salary: PropTypes.number.isRequired,
    }).isRequired,
    currency: PropTypes.string.isRequired,
};

const mapToStateToProps = (state) => ({
    currency: selectCurrency(state),
});

export default connect(mapToStateToProps, null)(JobCard);
