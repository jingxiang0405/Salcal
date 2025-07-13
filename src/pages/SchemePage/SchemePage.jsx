import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import SchemeGrid from "@/components/scheme/SchemeGrid/SchemeGrid"
import styles from './SchemePage.module.css'
import { GetSchemes } from '@/service/schemeService';

const StyledSchemePage = styled('div')(({ theme }) => ({
    width: 'calc(100vw - 250px)',
    height: '100vh',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

const StyledGridContainer = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    textAlign: 'center',
    padding: '2rem',
}));

const StyledSchemeText = styled('span')(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
}));

const SchemePage = () => {
    const [schemes, setSchemes] = useState([]);

    useEffect(() => {
        const fetchSchemes = async () => {
            const data = await GetSchemes();
            setSchemes(data);
        };

        fetchSchemes();
    }, []);

    return (
        <StyledSchemePage>
            <StyledGridContainer>
                <StyledSchemeText>方案一覽</StyledSchemeText>
                <SchemeGrid schemeData={schemes} />
            </StyledGridContainer>
        </StyledSchemePage>
    )
}

export default SchemePage;
