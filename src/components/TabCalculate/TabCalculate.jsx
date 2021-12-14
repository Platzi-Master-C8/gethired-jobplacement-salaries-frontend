import React, { useState } from 'react';

import Grid from '@mui/material/Grid';

import JobOffer from 'Components/JobOffer';
import Filter from 'Components/Filter';
import FormCard from 'Components/FormCard';
import { initialValues } from 'Constants';

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
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <FormCard values={formCalculate} onChange={handleSelectCalculate} title="Calculate Salary" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    Chart.js
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4}>
                    <Filter />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <JobOffer />
                </Grid>
            </Grid>
        </div>
    );
};

export default TabCalculate;
