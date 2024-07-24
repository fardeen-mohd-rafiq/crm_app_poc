import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, List, ListItem, SvgIcon } from '@mui/material';
import ViewsIcon from './Icons/ViewsIcon';
import HomeIcon from './Icons/HomeIcon';
import AppLogoIcon from './Icons/AppLogoIcon';

const Sidebar = () => {
    const location = useLocation();
    const menuItems = [
        { path: "/dashboard", icon: <HomeIcon /> },
        { path: "/views", icon: <ViewsIcon /> },
    ];

    const isActive = path => location.pathname === path;

    return (
        <Box width='60px' height="100vh" bgcolor='#03363d' color='white' textAlign='center'>
            <List>
                <ListItem button>
                    <SvgIcon>
                        <AppLogoIcon />
                    </SvgIcon>
                </ListItem>
                {menuItems.map(({ path, icon }) => (
                    <ListItem
                        key={path}
                        button
                        component={Link}
                        to={path}
                        sx={{
                            bgcolor: isActive(path) ? '#68868b' : 'transparent',
                        }}
                    >
                        <SvgIcon>
                            {icon}
                        </SvgIcon>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;