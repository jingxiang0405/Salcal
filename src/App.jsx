import React, { useState } from 'react';
import { Plus, Calculator, Users } from 'lucide-react';
import EmployeeCard from '@/components/employee/EmployeeCard';
import EmployeeForm from '@/components/employee/EmployeeForm';
import SalaryBreakdown from '@/components/salary/SalaryBreakDown';
import SchemeEditor from '@/components/scheme/SchemeEditor';
import './index.css'
// Header Component
const Header = ({ activeTab, setActiveTab }) => {
    return (
        <div className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Calculator className="text-blue-600" />
                        Salary Calculator
                    </h1>
                    <div className="flex gap-2">
                        <TabButton
                            active={activeTab === 'employees'}
                            onClick={() => setActiveTab('employees')}
                            icon={<Users size={16} />}
                            label="Employees"
                        />
                        <TabButton
                            active={activeTab === 'calculator'}
                            onClick={() => setActiveTab('calculator')}
                            icon={<Calculator size={16} />}
                            label="Calculator"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Tab Button Component
const TabButton = ({ active, onClick, icon, label }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
        >
            {icon}
            {label}
        </button>
    );
};

// Employee Management Tab Component
const EmployeeManagement = ({ employees, onAddEmployee, onEditEmployee, onEditScheme, onDeleteEmployee }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Employee Management</h2>
                <button
                    onClick={onAddEmployee}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                    <Plus size={16} />
                    Add Employee
                </button>
            </div>

            <div className="grid gap-4">
                {employees.map(employee => (
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        onEdit={onEditEmployee}
                        onEditScheme={onEditScheme}
                        onDelete={onDeleteEmployee}
                    />
                ))}
            </div>
        </div>
    );
};

// Calculator Tab Component
const CalculatorTab = ({ employees, calculateSalary }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Salary Calculations</h2>
            <div className="grid gap-6">
                {employees.map(employee => {
                    const salary = calculateSalary(employee);
                    return (
                        <SalaryBreakdown
                            key={employee.id}
                            employee={employee}
                            salary={salary}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// Salary Calculator Utility Hook
const useSalaryCalculator = () => {
    const calculateSalary = (employee) => {
        const { baseSalary, scheme } = employee;
        let totalSalary = baseSalary;
        let breakdown = { base: baseSalary };

        // Overtime calculation
        if (scheme.overtime.enabled && scheme.overtime.hours > 0) {
            const overtimePay = (baseSalary / 160) * scheme.overtime.rate * scheme.overtime.hours;
            totalSalary += overtimePay;
            breakdown.overtime = overtimePay;
        }

        // Bonus
        if (scheme.bonus.enabled && scheme.bonus.amount > 0) {
            totalSalary += scheme.bonus.amount;
            breakdown.bonus = scheme.bonus.amount;
        }

        // Allowances
        if (scheme.allowances.enabled) {
            const allowanceTotal = scheme.allowances.transport + scheme.allowances.food + scheme.allowances.health;
            totalSalary += allowanceTotal;
            breakdown.allowances = allowanceTotal;
        }

        // Deductions
        if (scheme.deductions.enabled) {
            const taxAmount = (totalSalary * scheme.deductions.tax) / 100;
            const insuranceAmount = (totalSalary * scheme.deductions.insurance) / 100;
            const providentAmount = (totalSalary * scheme.deductions.provident) / 100;
            const totalDeductions = taxAmount + insuranceAmount + providentAmount;

            breakdown.deductions = {
                tax: taxAmount,
                insurance: insuranceAmount,
                provident: providentAmount,
                total: totalDeductions
            };

            totalSalary -= totalDeductions;
        }

        return { total: totalSalary, breakdown };
    };

    return { calculateSalary };
};

// Main App Component
const App = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'John Doe',
            position: 'Software Engineer',
            baseSalary: 75000,
            scheme: {
                overtime: { enabled: true, rate: 1.5, hours: 0 },
                bonus: { enabled: true, amount: 0 },
                allowances: { enabled: true, transport: 500, food: 300, health: 200 },
                deductions: { enabled: true, tax: 15, insurance: 5, provident: 10 }
            }
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Product Manager',
            baseSalary: 85000,
            scheme: {
                overtime: { enabled: false, rate: 1.5, hours: 0 },
                bonus: { enabled: true, amount: 5000 },
                allowances: { enabled: true, transport: 800, food: 400, health: 300 },
                deductions: { enabled: true, tax: 18, insurance: 6, provident: 12 }
            }
        }
    ]);

    const [activeTab, setActiveTab] = useState('employees');
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [editingScheme, setEditingScheme] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const { calculateSalary } = useSalaryCalculator();

    const addEmployee = (employeeData) => {
        const id = Math.max(...employees.map(e => e.id), 0) + 1;
        setEmployees([...employees, {
            ...employeeData,
            id,
            baseSalary: parseFloat(employeeData.baseSalary)
        }]);
        setShowAddForm(false);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(emp =>
            emp.id === id ? { ...updatedEmployee, id, baseSalary: parseFloat(updatedEmployee.baseSalary) } : emp
        ));
        setEditingEmployee(null);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    const updateScheme = (employeeId, updatedScheme) => {
        setEmployees(employees.map(emp =>
            emp.id === employeeId ? { ...emp, scheme: updatedScheme } : emp
        ));
        setEditingScheme(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'employees' && (
                    <EmployeeManagement
                        employees={employees}
                        onAddEmployee={() => setShowAddForm(true)}
                        onEditEmployee={setEditingEmployee}
                        onEditScheme={setEditingScheme}
                        onDeleteEmployee={deleteEmployee}
                    />
                )}

                {activeTab === 'calculator' && (
                    <CalculatorTab
                        employees={employees}
                        calculateSalary={calculateSalary}
                    />
                )}
            </div>

            {/* Modals */}
            {showAddForm && (
                <EmployeeForm
                    onSave={addEmployee}
                    onCancel={() => setShowAddForm(false)}
                />
            )}

            {editingEmployee && (
                <EmployeeForm
                    employee={editingEmployee}
                    onSave={(updatedEmployee) => updateEmployee(editingEmployee.id, updatedEmployee)}
                    onCancel={() => setEditingEmployee(null)}
                    isEditing={true}
                />
            )}

            {editingScheme && (
                <SchemeEditor
                    employee={editingScheme}
                    onSave={(updatedScheme) => updateScheme(editingScheme.id, updatedScheme)}
                    onCancel={() => setEditingScheme(null)}
                />
            )}
        </div>
    );
};

export default App;
