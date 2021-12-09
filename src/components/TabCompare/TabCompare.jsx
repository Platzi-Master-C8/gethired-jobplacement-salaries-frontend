import React, { Fragment, useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { initialValues, values2, currencyName } from 'Constants';

const TabCompare = () => {
    const [formPrimary, setFormPrimary] = useState(initialValues);
    const [formSecondary, setFormSecondary] = useState(initialValues);

    const handleSelectPrimary = (e) => {
        const { name, value } = e.target;
        setFormPrimary((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectSecondary = (e) => {
        const { name, value } = e.target;
        setFormSecondary((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormCard values={formPrimary} onChange={handleSelectPrimary} title="Primary Profile" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FormCard values={formSecondary} onChange={handleSelectSecondary} title="Secondary Profile" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button variant="contained" fullWidth size="large">
                        Compare salary
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }} spacing={2}>
                <Grid item xs={6} sx={{ mt: 2 }}>
                    <NormalDistributionChart values={values2} currencyName={currencyName} />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default TabCompare;
