import { Save, X } from "lucide-react";
import { useState } from "react";
import SchemeSection from "./SchemeSelection";

// Scheme Editor Component
const SchemeEditor = ({ employee, onSave, onCancel }) => {
    const [scheme, setScheme] = useState({ ...employee.scheme });

    const updateSchemeField = (category, field, value) => {
        setScheme(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [field]: value
            }
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">
                        Edit Salary Scheme - {employee.name}
                    </h3>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Overtime Section */}
                    <SchemeSection
                        title="Overtime"
                        enabled={scheme.overtime.enabled}
                        onToggle={(enabled) => updateSchemeField('overtime', 'enabled', enabled)}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Rate Multiplier</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={scheme.overtime.rate}
                                    onChange={(e) => updateSchemeField('overtime', 'rate', parseFloat(e.target.value))}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Hours This Month</label>
                                <input
                                    type="number"
                                    value={scheme.overtime.hours}
                                    onChange={(e) => updateSchemeField('overtime', 'hours', parseInt(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </SchemeSection>

                    {/* Bonus Section */}
                    <SchemeSection
                        title="Bonus"
                        enabled={scheme.bonus.enabled}
                        onToggle={(enabled) => updateSchemeField('bonus', 'enabled', enabled)}
                    >
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Bonus Amount ($)</label>
                            <input
                                type="number"
                                value={scheme.bonus.amount}
                                onChange={(e) => updateSchemeField('bonus', 'amount', parseFloat(e.target.value) || 0)}
                                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </SchemeSection>

                    {/* Allowances Section */}
                    <SchemeSection
                        title="Allowances"
                        enabled={scheme.allowances.enabled}
                        onToggle={(enabled) => updateSchemeField('allowances', 'enabled', enabled)}
                    >
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Transport ($)</label>
                                <input
                                    type="number"
                                    value={scheme.allowances.transport}
                                    onChange={(e) => updateSchemeField('allowances', 'transport', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Food ($)</label>
                                <input
                                    type="number"
                                    value={scheme.allowances.food}
                                    onChange={(e) => updateSchemeField('allowances', 'food', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Health ($)</label>
                                <input
                                    type="number"
                                    value={scheme.allowances.health}
                                    onChange={(e) => updateSchemeField('allowances', 'health', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </SchemeSection>

                    {/* Deductions Section */}
                    <SchemeSection
                        title="Deductions (%)"
                        enabled={scheme.deductions.enabled}
                        onToggle={(enabled) => updateSchemeField('deductions', 'enabled', enabled)}
                    >
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Tax (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={scheme.deductions.tax}
                                    onChange={(e) => updateSchemeField('deductions', 'tax', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Insurance (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={scheme.deductions.insurance}
                                    onChange={(e) => updateSchemeField('deductions', 'insurance', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Provident Fund (%)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={scheme.deductions.provident}
                                    onChange={(e) => updateSchemeField('deductions', 'provident', parseFloat(e.target.value) || 0)}
                                    className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </SchemeSection>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(scheme)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
                    >
                        <Save size={16} />
                        Save Scheme
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SchemeEditor; 
