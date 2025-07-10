import SchemeGrid from "@/components/scheme/SchemeGrid/SchemeGrid"
import styles from './SchemePage.module.css'
import { GetSchemes } from '@/service/schemeService';


const schemes = await GetSchemes();
const SchemePage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.gridContainer}>
                <span className={styles.schemeText}>方案一覽</span>
                <SchemeGrid schemeData={schemes} />
            </div>
        </div>
    )
}

export default SchemePage 
