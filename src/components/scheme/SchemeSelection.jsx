// Scheme Section Component
const SchemeSection = ({ title, enabled, onToggle, children }) => {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-700">{title}</h4>
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => onToggle(e.target.checked)}
                    className="w-4 h-4"
                />
            </div>
            {enabled && children}
        </div>
    );
};

export default SchemeSection;
