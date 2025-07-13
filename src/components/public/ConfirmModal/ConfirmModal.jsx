import React from 'react';
import { styled } from '@mui/material/styles';
import styles from './ConfirmModal.module.css';

const StyledModalContent = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    width: '90%',
    maxWidth: '400px',
    textAlign: 'center',
}));

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <StyledModalContent onClick={(e) => e.stopPropagation()}>
                <h3 className={styles.title}>確認操作</h3>
                <h3 className={styles.title}>確認操作</h3>
                <p className={styles.message}>{message}</p>
                <div className={styles.buttonContainer}>
                    <button onClick={onClose} className={`${styles.button} ${styles.cancelButton}`}>取消</button>
                    <button onClick={onConfirm} className={`${styles.button} ${styles.confirmButton}`}>確認</button>
                </div>
            </StyledModalContent>
        </div>
    );
};

export default ConfirmModal;
