import React from 'react';
// import { BriefCase } from '@master-c8/icons';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Box from '@mui/material/Box';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import MenuItem from '@mui/material/MenuItem';

const platformOptions = [
    {
        value: 'Zoom',
        label: 'Zoom',
    },
    {
        value: 'Google Meet',
        label: 'Google Meet',
    },
    {
        value: 'Microsoft Teams',
        label: 'Microsoft Teams',
    },
    {
        value: 'Slack',
        label: 'Slack',
    },
];

const Calendar = () => {
    const [value, setValue] = React.useState(new Date());

    const [platform, setPlatform] = React.useState('');

    const handleChange = (event) => {
        setPlatform(event.target.value);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#F8F8F8',
                    // '&:hover': {
                    //     backgroundColor: '#F8F8F8',
                    // opacity: [0.9, 0.8, 0.7],
                    // },
                }}
            >
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField
                    id="filled-select-platform"
                    select
                    label="Select Platform"
                    value={platform}
                    onChange={handleChange}
                    helperText="Select a platform"
                    variant="filled"
                >
                    {platformOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <DatePicker
                    label="Date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                    label="Time"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <TextField id="filled-basic" label="URL" type="url" variant="filled" />
                <TextField id="filled-basic" label="Phone Number" type="tel" variant="filled" />
            </Box>
        </LocalizationProvider>
    );
};

export default Calendar;
