import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { helpCurrency } from 'Helpers';

const JobCard = ({ job, onClick }) => {
    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={10}>
                    {/* <CardContent> */}
                    <Typography sx={{ mb: 4 }} variant="h2">
                        {job.name}
                    </Typography>
                    <Typography sx={{ mb: 4 }}>{job.description}</Typography>
                    <Typography>{helpCurrency(job.salary)}</Typography>
                    {/* </CardContent> */}
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={onClick} variant="contained" color="primary" size="large">
                        Apply
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
};

JobCard.propTypes = {
    job: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        salary: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default JobCard;
