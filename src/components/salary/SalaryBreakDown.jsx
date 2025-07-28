import SalaryItem from "./SalaryItem";

// Salary Breakdown Component
const SalaryBreakdown = ({ employee, salary }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
                    <p className="text-gray-600">{employee.position}</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">${salary.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Net Salary</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <SalaryItem
                    label="Base Salary"
                    amount={salary.breakdown.base}
                    type="base"
                />
                {salary.breakdown.overtime && (
                    <SalaryItem
                        label="Overtime"
                        amount={salary.breakdown.overtime}
                        type="addition"
                    />
                )}
                {salary.breakdown.bonus && (
                    <SalaryItem
                        label="Bonus"
                        amount={salary.breakdown.bonus}
                        type="addition"
                    />
                )}
                {salary.breakdown.allowances && (
                    <SalaryItem
                        label="Allowances"
                        amount={salary.breakdown.allowances}
                        type="addition"
                    />
                )}
                {salary.breakdown.deductions && (
                    <SalaryItem
                        label="Deductions"
                        amount={salary.breakdown.deductions.total}
                        type="deduction"
                    />
                )}
            </div>
        </div>
    );
};

export default SalaryBreakdown;
