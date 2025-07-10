import styles from './EditSchemeModal.module.css';

const EditSchemeModal = ({ scheme, isOpen, onClose, onSave, }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>編輯方案</h2>
                <p>Editing: {scheme?.name}</p>
                {/* Form content will go here */}


                <button onClick={onClose} className={styles.cancelButton}>取消</button>
                <button onClick={onSave} className={styles.confirmButton}>儲存</button>
            </div>


        </div>
    );
};

export default EditSchemeModal;
