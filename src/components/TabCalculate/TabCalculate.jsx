import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { initialValues, values1, currencyName } from 'Constants';

const TabCalculate = () => {
    const [formCalculate, setFormCalculate] = useState(initialValues);

    const handleSelectCalculate = (e) => {
        const { name, value } = e.target;
        setFormCalculate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <FormCard values={formCalculate} onChange={handleSelectCalculate} title="Calculate Salary" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <NormalDistributionChart values={values1} currencyName={currencyName} />
            </Grid>
        </Grid>
    );
};

export default TabCalculate;
