import React, { useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { ChevronLeft } from '@master-c8/icons';

import { TabPanel } from 'Components/commons/Tabs';
import FormCard from 'Components/FormCard';

const initialValues = {
    jobTitle: '',
    technologies: [],
    senority: '',
    englishLevel: '',
};

const Theme = () => {
    const [tabs, setValue] = React.useState(0);
    const [formPrimary, setFormPrimary] = useState(initialValues);
    const [formSecondary, setFormSecondary] = useState(initialValues);
    const [formCalculate, setFormCalculate] = useState(initialValues);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    const handleSelectCalculate = (e) => {
        const { name, value } = e.target;
        setFormCalculate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={tabs}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab icon={<ChevronLeft />} label="Calculate Salary" iconPosition="start" />
                    <Tab label="Compare Salary" />
                </Tabs>
            </Box>
            <TabPanel value={tabs} index={0}>
                <FormCard values={formCalculate} onChange={handleSelectCalculate} title="Calculate Salary" />
            </TabPanel>
            <TabPanel value={tabs} index={1}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormCard values={formPrimary} onChange={handleSelectPrimary} title="Primary Profile" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormCard values={formSecondary} onChange={handleSelectSecondary} title="Secondary Profile" />
                    </Grid>
                </Grid>
            </TabPanel>
        </Box>
    );
};

export default Theme;
