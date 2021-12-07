import React, { useState, Fragment } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Switch, Currency } from '@master-c8/icons';
import { Header } from '@master-c8/commons';

import { TabPanel } from 'Components/commons/Tabs';
import TabCompare from 'Components/TabCompare';
import TabCalculate from 'Components/TabCalculate';

const Theme = () => {
    const [tabs, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Header />
            <Container sx={{ mt: 5 }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={tabs}
                            onChange={handleChange}
                            aria-label="Job placement - Salaries"
                            textColor="secondary"
                            indicatorColor="secondary"
                        >
                            <Tab icon={<Currency />} label="Calculate Salary" iconPosition="start" />
                            <Tab icon={<Switch />} label="Compare Salary" iconPosition="start" />
                        </Tabs>
                    </Box>
                    <TabPanel value={tabs} index={0}>
                        <TabCalculate />
                    </TabPanel>
                    <TabPanel value={tabs} index={1}>
                        <TabCompare />
                    </TabPanel>
                </Box>
            </Container>
        </Fragment>
    );
};

export default Theme;
