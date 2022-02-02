import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Select from 'Components/Commons/Select';

const Filter = () => {
    const Filters = ['1', '2', '3', '4'];
    return (
        <Card sx={{ p: 2, boxShadow: 3, mt: 2 }}>
            <Typography sx={{ mb: 2 }} variant="h2">
                Filters
            </Typography>
            <Select label="Job Title" options={Filters} />
            <Select label="Jobsss" options={Filters} />
            <Select label="Location" options={Filters} />
            <Select label="Technologies" options={Filters} />
        </Card>
    );
};

export default Filter;