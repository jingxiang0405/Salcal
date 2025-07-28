import { Edit3, Settings, Trash2 } from 'lucide-react';

// Employee Card Component
const EmployeeCard = ({ employee, onEdit, onEditScheme, onDelete }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
                    <p className="text-gray-600">{employee.position}</p>
                    <p className="text-sm text-gray-500 mt-1">Base Salary: ${employee.baseSalary.toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(employee)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                        title="Edit Employee"
                    >
                        <Edit3 size={16} />
                    </button>
                    <button
                        onClick={() => onEditScheme(employee)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded"
                        title="Edit Salary Scheme"
                    >
                        <Settings size={16} />
                    </button>
                    <button
                        onClick={() => onDelete(employee.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                        title="Delete Employee"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
