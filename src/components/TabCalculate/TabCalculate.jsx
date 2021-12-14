import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import FormCard from 'Components/FormCard';
import NormalDistributionChart from 'Components/Charts';

import { initialValues, values1, currencyName } from 'Constants';
import { disabled } from '../../helpers';

const TabCalculate = () => {
    const [formCalculate, setFormCalculate] = useState(initialValues);
    const isDisabled = disabled(formCalculate);

    const handleSelectCalculate = (e) => {
        const { name, value } = e.target;
        setFormCalculate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDeleteChip = (_, value, name) => {
        setFormCalculate((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((chip) => chip !== value),
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <FormCard
                    values={formCalculate}
                    onChange={handleSelectCalculate}
                    title="Calculate Salary"
                    onDelete={handleDeleteChip}
                >
                    <Button
                        sx={{ mt: 2 }}
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={() => {}}
                        disabled={isDisabled}
                    >
                        Calculate Salary
                    </Button>
                </FormCard>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <NormalDistributionChart values={values1} currencyName={currencyName} />
            </Grid>
        </Grid>
    );
};

export default TabCalculate;
