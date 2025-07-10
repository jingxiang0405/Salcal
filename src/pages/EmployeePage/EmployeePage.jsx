import EmployeeBox from "@/components/employee/EmployeeBox/EmployeeBox";

const employeeData = [
    {
        name: 'Tom',
        wageScheme: '月薪制',
        wage: 30000
    },
]
const EmployeePage = () => {


    const handleSave = () => {
        console.log('save')
    };

    return (
        <div>
            {
                employeeData.map((employee, index) => (
                    <EmployeeBox key={index} employee={employee} onSave={handleSave} />
                ))
            }
        </div>
    )

};

export default EmployeePage;
