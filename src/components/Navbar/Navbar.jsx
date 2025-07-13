import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ items }) => {
    const location = useLocation();

    const navigate = useNavigate();
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {items.map((item) => (
                        <Button
                            key={item.label}
                            onClick={() => { navigate(item.href) }}
                            to={item.href}
                            variant={location.pathname === item.href ? 'outlined' : 'text'}
                            color="inherit"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
