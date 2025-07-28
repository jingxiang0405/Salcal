import { Save } from "lucide-react";
import { useState } from "react";
const EmployeeForm = ({ employee, onSave, onCancel, isEditing = false }) => {
    const defaultEmployee = {
        name: '',
        position: '',
        baseSalary: '',
        scheme: {
            overtime: { enabled: true, rate: 1.5, hours: 0 },
            bonus: { enabled: true, amount: 0 },
            allowances: { enabled: true, transport: 0, food: 0, health: 0 },
            deductions: { enabled: true, tax: 15, insurance: 5, provident: 10 }
        }
    };

    const [formData, setFormData] = useState(employee || defaultEmployee);

    const handleSubmit = () => {
        if (formData.name && formData.position && formData.baseSalary) {
            onSave(formData);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {isEditing ? 'Edit Employee' : 'Add New Employee'}
                </h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Position</label>
                        <input
                            type="text"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Base Salary ($)</label>
                        <input
                            type="number"
                            value={formData.baseSalary}
                            onChange={(e) => setFormData({ ...formData, baseSalary: e.target.value })}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSubmit()}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
                        >
                            <Save size={16} />
                            {isEditing ? 'Update' : 'Add'} Employee
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeForm;
