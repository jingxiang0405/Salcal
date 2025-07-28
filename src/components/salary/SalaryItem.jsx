// Salary Item Component
const SalaryItem = ({ label, amount, type }) => {
    const getAmountDisplay = () => {
        switch (type) {
            case 'addition':
                return `+$${amount.toFixed(2)}`;
            case 'deduction':
                return `-$${amount.toFixed(2)}`;
            default:
                return `$${amount.toLocaleString()}`;
        }
    };

    const getTextColor = () => {
        switch (type) {
            case 'addition':
                return 'text-blue-600';
            case 'deduction':
                return 'text-red-600';
            default:
                return 'text-gray-900';
        }
    };

    return (
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className={`font-semibold ${getTextColor()}`}>
                {getAmountDisplay()}
            </p>
        </div>
    );
};

export default SalaryItem;
