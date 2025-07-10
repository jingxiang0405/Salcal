import React from 'react';
import styles from './ConfirmModal.module.css';

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h3 className={styles.title}>確認操作</h3>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>
          <button onClick={onClose} className={`${styles.button} ${styles.cancelButton}`}>取消</button>
          <button onClick={onConfirm} className={`${styles.button} ${styles.confirmButton}`}>確認</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
