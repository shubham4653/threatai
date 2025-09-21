import React from 'react';

const DetailItem = ({ label, value, isStatus = false }) => {
    const statusColor = value.includes('Critical') ? 'text-red-400' : value.includes('High') ? 'text-orange-400' : value.includes('Medium') ? 'text-yellow-400' : 'text-gray-300';
    return (
        <div className="border-b border-gray-700/50 pb-3">
            <p className="text-sm text-gray-400">{label}</p>
            <p className={`text-lg font-semibold ${isStatus ? statusColor : 'text-white'}`}>{value}</p>
        </div>
    );
};

export default DetailItem;
