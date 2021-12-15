import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ListSalaries } from 'Constants';

const JobOffer = () => {
    const randomSalary = ListSalaries[Math.floor(Math.random() * ListSalaries.length)];
    return (
        <Fragment>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={10}>
                        {/* <CardContent> */}
                        <Typography sx={{ mb: 4 }} variant="h2">
                            Job Title
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem in
                            pellentesque imperdiet. Sed euismod vel tortor at tincidunt.
                        </Typography>
                        <Typography>
                            ${randomSalary - 100} - ${randomSalary}
                        </Typography>
                        {/* </CardContent> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="primary" size="large">
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={10}>
                        {/* <CardContent> */}
                        <Typography sx={{ mb: 4 }} variant="h2">
                            Job Title
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem in
                            pellentesque imperdiet. Sed euismod vel tortor at tincidunt.
                        </Typography>
                        <Typography>
                            ${randomSalary - 100} - ${randomSalary}
                        </Typography>
                        {/* </CardContent> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="primary" size="large">
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={10}>
                        {/* <CardContent> */}
                        <Typography sx={{ mb: 4 }} variant="h2">
                            Job Title
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem in
                            pellentesque imperdiet. Sed euismod vel tortor at tincidunt.
                        </Typography>
                        <Typography>
                            ${randomSalary - 100} - ${randomSalary}
                        </Typography>
                        {/* </CardContent> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="primary" size="large">
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={10}>
                        {/* <CardContent> */}
                        <Typography sx={{ mb: 4 }} variant="h2">
                            Job Title
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate lorem in
                            pellentesque imperdiet. Sed euismod vel tortor at tincidunt.
                        </Typography>
                        <Typography>
                            ${randomSalary - 100} - ${randomSalary}
                        </Typography>
                        {/* </CardContent> */}
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="contained" color="primary" size="large">
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Fragment>
    );
};

export default JobOffer;
