import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// --- DUMMY DATA ---
const dummyData = [
    {
        id: 1,
        url: "malicious-site-one.com",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+1",
        ownerWallet: "0xAbCd...EfGh",
        totalProducts: 150,
        interactions: 1234,
        joined: "2024-08-15",
        status: "Active - High Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [65, 25, 10] }
    },
    {
        id: 2,
        url: "phishing-example-two.net",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+2",
        ownerWallet: "0x1234...5678",
        totalProducts: 75,
        interactions: 850,
        joined: "2024-07-22",
        status: "Active - Medium Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [80, 10, 10] }
    },
    {
        id: 3,
        url: "safe-looking-scam.org",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+3",
        ownerWallet: "0x9aBc...DeF0",
        totalProducts: 20,
        interactions: 300,
        joined: "2024-09-01",
        status: "Under Review",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [30, 10, 60] }
    },
    {
        id: 4,
        url: "malware-distributor.io",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+4",
        ownerWallet: "0xFeDc...Ba98",
        totalProducts: 500,
        interactions: 5400,
        joined: "2024-06-10",
        status: "Active - Critical Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [5, 90, 5] }
    },
    {
        id: 5,
        url: "crypto-drainer-link.xyz",
        imageUrl: "https://placehold.co/600x400/1f2937/9ca3af?text=Threat+Vector+5",
        ownerWallet: "0x7654...3210",
        totalProducts: 5,
        interactions: 980,
        joined: "2024-09-18",
        status: "New - High Threat",
        threatData: { labels: ['Phishing', 'Malware', 'Scam'], values: [15, 5, 80] }
    },
];

// --- SVG ICONS ---
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const CubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7v10l8 4m0-14L4 7" /></svg>;
const AiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


// --- STYLES & ANIMATIONS ---
const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #111827; /* Dark Slate Blue */
            color: #9ca3af; /* Cool Gray */
        }

        .container-wrapper {
            width: 100%;
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 1rem 2rem;
        }

        .btn-primary {
            background-color: #374151;
            border: 1px solid #4b5563;
            color: #d1d5db;
            padding: 10px 20px;
            border-radius: 6px;
            font-weight: 500;
            transition: background-color 0.2s ease, border-color 0.2s ease;
        }
        .btn-primary:hover {
            background-color: #4b5563;
            border-color: #6b7280;
        }

        .card {
            background-color: #1f2937;
            border: 1px solid #374151;
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            cursor: pointer;
            border-radius: 8px;
            overflow: hidden;
        }
        .card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2);
            border-color: #4b5563;
        }
        
        .card-image {
            transition: transform 0.3s ease;
        }
        .card:hover .card-image {
            transform: scale(1.05);
        }

        .page { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `}</style>
);


// --- UI COMPONENTS ---

const IntroPage = ({ onNavigate }) => (
    <div className="page min-h-screen flex flex-col items-center justify-center bg-[#111827]">
        <div className="container-wrapper text-center">
            <img src="https://placehold.co/1200x400/111827/4f46e5?text=AI+Threat+Intelligence" alt="Abstract technology banner" className="w-full h-auto rounded-lg mb-12"/>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                AI-Powered Threat Intelligence
            </h1>
            <h2 className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                A decentralized marketplace for real-time cyber threat data, secured by the blockchain to ensure immutable authenticity and integrity.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-left">
                <div className="bg-[#1f2937] p-6 rounded-lg">
                    <h3 className="flex items-center text-xl font-semibold text-white mb-2"><AiIcon/> AI Detection</h3>
                    <p className="text-white">Autonomous AI agents identify new malware, phishing, and attack vectors in real-time.</p>
                </div>
                <div className="bg-[#1f2937] p-6 rounded-lg">
                    <h3 className="flex items-center text-xl font-semibold text-white mb-2"><CubeIcon/> Blockchain Validation</h3>
                    <p className="text-white">Threat data is committed to an immutable ledger, ensuring a tamper-proof historical record.</p>
                </div>
                 <div className="bg-[#1f2937] p-6 rounded-lg">
                    <h3 className="flex items-center text-xl font-semibold text-white mb-2"><ShieldIcon/> Secure Marketplace</h3>
                    <p className="text-white">Organizations access a global intelligence feed to proactively defend their digital assets.</p>
                </div>
            </div>

            <div className="mt-8">
                <button onClick={() => onNavigate('dashboard')} className="btn-primary">View Dashboard</button>
            </div>
        </div>
    </div>
);

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


const DashboardPage = ({ onNavigate, onSelectCard }) => (
    <div className="page min-h-screen bg-[#111827]">
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
        <div className="page min-h-screen bg-[#111827]">
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

const DetailItem = ({ label, value, isStatus = false }) => {
    const statusColor = value.includes('Critical') ? 'text-red-400' : value.includes('High') ? 'text-orange-400' : value.includes('Medium') ? 'text-yellow-400' : 'text-gray-300';
    return (
        <div className="border-b border-gray-700/50 pb-3">
            <p className="text-sm text-gray-400">{label}</p>
            <p className={`text-lg font-semibold ${isStatus ? statusColor : 'text-white'}`}>{value}</p>
        </div>
    );
};


// --- Main App Component ---
function App() {
    const [currentPage, setCurrentPage] = useState('intro');
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelectCard = (cardData) => {
        setSelectedCard(cardData);
        setCurrentPage('details');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard': return <DashboardPage onNavigate={setCurrentPage} onSelectCard={handleSelectCard} />;
            case 'details': return <DetailsPage card={selectedCard} onNavigate={setCurrentPage} />;
            case 'intro': default: return <IntroPage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <>
            <GlobalStyles />
            {renderPage()}
        </>
    );
}

export default App;
