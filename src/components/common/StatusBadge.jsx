import React from 'react';

const StatusBadge = ({ status }) => {
    const statusInfo = {
        'Critical': 'bg-red-500/10 text-red-400 border-red-500/30',
        'High': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
        'Medium': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
        'Default': 'bg-gray-500/10 text-gray-400 border-gray-500/30'
    };
    const statusKey = Object.keys(statusInfo).find(key => status.includes(key)) || 'Default';
    const shortStatus = status.split(' - ')[1] || status.split(' ')[0];

    return (
        <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border whitespace-nowrap ${statusInfo[statusKey]}`}>
            {shortStatus}
        </span>
    );
};

export default StatusBadge;
