import React from 'react';
import styles from './SchemeCard.module.css';

const SchemeCard = ({ scheme, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{scheme.name}</h3>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardDescription}>{scheme.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <button onClick={() => onEdit(scheme)} className={`${styles.button} ${styles.editButton}`}>編輯</button>
        <button onClick={() => onDelete(scheme.id)} className={`${styles.button} ${styles.deleteButton}`}>刪除</button>
      </div>
    </div>
  );
};

export default SchemeCard;
