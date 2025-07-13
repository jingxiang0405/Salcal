import { styled } from '@mui/material/styles';
import styles from './EditSchemeModal.module.css';

const StyledModalContent = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    minWidth: '400px',
    position: 'relative',
}));

const EditSchemeModal = ({ scheme, isOpen, onClose, onSave, }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <StyledModalContent onClick={(e) => e.stopPropagation()}>
                <h2>編輯方案</h2>
                <p>Editing: {scheme?.name}</p>
                {/* Form content will go here */}


                <button onClick={onClose} className={styles.cancelButton}>取消</button>
                <button onClick={onSave} className={styles.confirmButton}>儲存</button>
            </StyledModalContent>


        </div>
    );
};

export default EditSchemeModal;
