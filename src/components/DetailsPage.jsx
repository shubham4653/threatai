import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import DetailItem from './common/DetailItem';

const DetailsPage = ({ card, onNavigate }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;
        if (chartRef.current && card) {
            chartInstance = new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: card.threatData.labels,
                    datasets: [{
                        data: card.threatData.values,
                        backgroundColor: ['#b91c1c', '#b45309', '#a16207'],
                        borderColor: '#1f2937',
                        borderWidth: 4,
                        hoverOffset: 4
                    }]
                },
                options: { responsive: true, cutout: '70%', plugins: { legend: { display: false } } }
            });
        }
        return () => chartInstance?.destroy();
    }, [card]);

    if (!card) return null;

    return (
        <div className="page min-h-screen">
             <div className="container-wrapper">
                <header className="flex justify-between items-center py-6 border-b border-gray-700 mb-8">
                    <h1 className="text-3xl font-bold text-white">Threat Details</h1>
                    <button onClick={() => onNavigate('dashboard')} className="btn-primary text-sm">Back to Dashboard</button>
                </header>
                <div className="bg-[#1f2937] rounded-lg p-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 space-y-4">
                        <DetailItem label="Website URL" value={card.url} />
                        <DetailItem label="Owner Wallet Address" value={card.ownerWallet} />
                        <DetailItem label="Total Products Listed" value={card.totalProducts.toString()} />
                        <DetailItem label="Total Interactions" value={card.interactions.toString()} />
                        <DetailItem label="Joined At" value={card.joined} />
                        <DetailItem label="Status" value={card.status} isStatus={true} />
                    </div>
                    <div className="lg:col-span-2 flex flex-col items-center justify-center">
                        <div className="w-full max-w-xs"><canvas ref={chartRef}></canvas></div>
                        <div className="mt-6 w-full text-center">
                            <h4 className="text-white font-semibold mb-3">Threat Breakdown</h4>
                            <div className="space-y-2 text-sm">
                                {card.threatData.labels.map((label, i) => (
                                    <div key={label} className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <span className="h-3 w-3 rounded-full mr-2" style={{backgroundColor: ['#b91c1c', '#b45309', '#a16207'][i]}}></span>
                                            <span className="text-gray-300">{label}</span>
                                        </div>
                                        <span className="font-medium text-gray-400">{card.threatData.values[i]}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
