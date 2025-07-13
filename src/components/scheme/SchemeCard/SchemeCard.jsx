import React from 'react';
import { styled } from '@mui/material/styles';
import styles from './SchemeCard.module.css';

const StyledCard = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: theme.shadows[1],
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out',
    width: '300px',
    '&:hover': {
        transform: 'translateY(-5px)',
    },
}));

const StyledCardHeader = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    padding: '16px',
    borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledCardDescription = styled('p')(({ theme }) => ({
    margin: 0,
    color: theme.palette.text.secondary,
}));

const StyledCardFooter = styled('div')(({ theme }) => ({
    padding: '16px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    borderTop: `1px solid ${theme.palette.divider}`,
}));

const SchemeCard = ({ scheme, onEdit, onDelete }) => {
    return (
        <StyledCard>
            <StyledCardHeader>
                <h3 className={styles.cardTitle}>{scheme.name}</h3>
            </StyledCardHeader>
            <div className={styles.cardBody}>
                <StyledCardDescription>{scheme.description}</StyledCardDescription>
            </div>
            <StyledCardFooter>
                <button onClick={() => onEdit(scheme)} className={`${styles.button} ${styles.editButton}`}>編輯</button>
                <button onClick={() => onDelete(scheme.id)} className={`${styles.button} ${styles.deleteButton}`}>刪除</button>
            </StyledCardFooter>
        </StyledCard>
    );
};

export default SchemeCard;
