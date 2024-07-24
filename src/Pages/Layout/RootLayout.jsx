import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import { Stack, Box } from '@mui/material';

const RootLayout = () => {
    return (
        <Box>
            <Stack direction="row">
                <Sidebar />
                <Box style={{ flexGrow: 1 }}>
                    <Header />
                    <Outlet />
                </Box>
            </Stack>
        </Box>
    );
};

export default RootLayout;