import React, { useState, Fragment } from 'react';

import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Switch, Currency, Home } from '@master-c8/icons';
import { Header } from '@master-c8/commons';

import { TabPanel } from 'Components/Commons/Tabs';
import TabCompare from 'Components/TabCompare';
import TabCalculate from 'Components/TabCalculate';
import SnackbarMessage from 'Components/Commons/SnackbarMessage/SnackbarMessage';
import Currencies from 'Components/Currencies';

const Salaries = () => {
    const [tabs, setValue] = useState(0);

    const handleChange = (_, newValue) => setValue(newValue);

    return (
        <Fragment>
            <Header isLogged>
                <MenuList sx={{ display: { sm: 'initial', md: 'flex' } }}>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                alignItems: 'center',
                                gap: '5px',
                                display: 'flex',
                                textDecoration: 'none',
                            }}
                            href={process.env.ENTERPRISES_URL}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center' }}>
                                <Home color="secondary" />
                            </ListItemIcon>
                            <Typography color="secondary" sx={{ fontSize: { sm: '16px', md: '13px' } }}>
                                Home
                            </Typography>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Header>
            <Container sx={{ mt: 5 }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
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
                    <Currencies />
                    <TabPanel value={tabs} index={0}>
                        <TabCalculate />
                    </TabPanel>
                    <TabPanel value={tabs} index={1}>
                        <TabCompare />
                    </TabPanel>
                </Box>
            </Container>
            <SnackbarMessage />
        </Fragment>
    );
};

export default Salaries;
