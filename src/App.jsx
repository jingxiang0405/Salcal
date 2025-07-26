import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage/MainPage";
import SchemePage from "@/pages/SchemePage/SchemePage";
import EmployeePage from "@/pages/EmployeePage/EmployeePage";
import Navbar from "@/components/Navbar/Navbar";

import { ThemeProvider, CssBaseline, Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import getTheme from "./theme";
import './index.css'



function App() {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(() => getTheme(mode), [mode]);

    const items = [
        { label: "首頁", href: "/" },
        { label: "方案", href: "/scheme" },
        { label: "員工", href: "/employee" },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="main-layout">
                <Router>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 1300, // Ensure it's above the navbar
                        }}
                    >
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                    <Navbar items={items} />
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/scheme" element={<SchemePage />} />
                        <Route path="/employee" element={<EmployeePage />} />
                    </Routes>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;


