import React from 'react';
import StatusBadge from './common/StatusBadge';

const DashboardPage = ({ onNavigate, onSelectCard, dummyData }) => (
    <div className="page min-h-screen">
        <div className="container-wrapper">
            <header className="flex justify-between items-center py-6 border-b border-gray-700 mb-8">
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <button onClick={() => onNavigate('intro')} className="btn-primary text-sm">Back to Home</button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {dummyData.map(item => (
                    <div key={item.id} className="card" onClick={() => onSelectCard(item)}>
                        <div className="overflow-hidden h-48">
                           <img src={item.imageUrl} alt={item.url} className="w-full h-full object-cover card-image"/>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start">
                               <p className="font-semibold text-white truncate pr-4 flex-1">{item.url}</p>
                               <StatusBadge status={item.status} />
                            </div>
                            <div className="mt-5 flex justify-between gap-3">
                                <button onClick={(e) => {e.stopPropagation(); alert(`Reporting ${item.url}`);}} className="w-full py-2 rounded-md text-sm font-semibold transition-colors bg-[#374151] text-gray-300 btn-report">Report</button>
                                <button onClick={(e) => {e.stopPropagation(); alert(`Classifying ${item.url}`);}} className="w-full py-2 rounded-md text-sm font-semibold transition-colors bg-[#374151] text-gray-300 btn-classify">Classify</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default DashboardPage;
