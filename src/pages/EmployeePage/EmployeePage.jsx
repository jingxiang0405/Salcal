import { useEffect, useState } from 'react';
import EmployeeBox from "@/components/employee/EmployeeBox/EmployeeBox";
import Button from '@mui/material/Button';

import styles from './EmployeePage.module.css'

const EmployeePage = () => {

    const [employees, setEmployees] = useState([]);

    const handleSave = () => {
        console.log('save')
    };

    const handleNewEmployee = () => {
        console.log('New Employee')
    }


    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await GetEmployees();
            setEmployees(data);
        };

        fetchEmployees();
    }, []);
    return (
        <div className={styles.container}>
            {
                employees.map((employee, index) => (
                    <EmployeeBox key={index} employee={employee} onSave={handleSave} />
                ))
            }

            <Button variant="contained" onClick={handleNewEmployee}>
                新增員工
            </Button>
        </div>
    )

};

export default EmployeePage;
