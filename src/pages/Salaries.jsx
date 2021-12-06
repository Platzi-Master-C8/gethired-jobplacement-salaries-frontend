import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import 'Styles/themeExample.scss';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Card from '@mui/material/Card';

const Theme = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab label="Calculate Salary" />
                    <Tab label="Compare Salary" />
                </Tabs>
            </Box>
            {/* <TabPanel value={value} index={0}>
            Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
            Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
            Item Three
            </TabPanel> */}
            <Card sx={{ p: 2, boxShadow: 3 }}>
                <Typography sx={{ m: 1 }} variant="h2">
                    Primary Profile
                </Typography>
                <FormControl variant="filled" sx={{ my: 1 }} fullWidth>
                    <InputLabel id="label-job">Job title</InputLabel>
                    <Select labelId="label-job" value="">
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ my: 1 }} fullWidth>
                    <InputLabel id="label-technologies">Technologies</InputLabel>
                    <Select labelId="label-technologies" value={[]} multiple>
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ my: 1 }} fullWidth>
                    <InputLabel id="label-senority">Senority</InputLabel>
                    <Select labelId="label-senority" value="">
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ my: 1 }} fullWidth>
                    <InputLabel id="label-english">English Level</InputLabel>
                    <Select labelId="label-english" value="">
                        <MenuItem>1</MenuItem>
                        <MenuItem>2</MenuItem>
                        <MenuItem>3</MenuItem>
                        <MenuItem>4</MenuItem>
                        <MenuItem>5</MenuItem>
                    </Select>
                </FormControl>
            </Card>
        </Box>
    );
};

export default Theme;
