import { useCallback, useState } from 'react'
import SchemeCard from '../SchemeCard/SchemeCard'
import EditSchemeModal from '../EditSchemeModal/EditSchemeModal';
import ConfirmModal from '../../public/ConfirmModal/ConfirmModal';
import styles from './SchemeGrid.module.css'

/**
 * @param {Array<object>} schemeData - An array of schemes 
 */
const SchemeGrid = ({ schemeData }) => {

    const [showEdit, setShowEdit] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [schemeToDelete, setSchemeToDelete] = useState(null);

    const handleSchemeEdit = useCallback((scheme) => {
        setSelectedScheme(scheme);
        setShowEdit(true);
    })

    const handleSchemeDelete = useCallback((schemeId) => {
        setSchemeToDelete(schemeId);
        setShowConfirm(true);
    })

    const handleConfirmDelete = () => {
        console.log("Delete scheme with id: ", schemeToDelete);
        // Add your delete logic here
        setShowConfirm(false);
        setSchemeToDelete(null);
    }

    const handleCloseModal = () => {
        setShowEdit(false);
        setSelectedScheme(null);
    }

    const handleCloseConfirm = () => {
        setShowConfirm(false);
        setSchemeToDelete(null);
    }

    return (
        <div className={styles.grid}>
            {
                schemeData?.map((scheme, index) =>
                    <SchemeCard scheme={scheme} key={`scheme-${index}`} onEdit={handleSchemeEdit} onDelete={handleSchemeDelete} />
                )
            }
            <EditSchemeModal isOpen={showEdit} onClose={handleCloseModal} scheme={selectedScheme} />

            <ConfirmModal
                isOpen={showConfirm}
                onClose={handleCloseConfirm}
                onConfirm={handleConfirmDelete}
                message={`您確定要刪除此方案嗎？此操作無法復原。`}
            />
        </div>
    )
}

export default SchemeGrid 
