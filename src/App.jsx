import React, { useState } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import IntroPage from './components/IntroPage';
import DashboardPage from './components/DashboardPage';
import DetailsPage from './components/DetailsPage';
import { dummyData } from './data/dummyData';
import GlobalStyles from './components/common/GlobalStyles';




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
            case 'dashboard': return <DashboardPage onNavigate={setCurrentPage} onSelectCard={handleSelectCard} dummyData={dummyData} />;
            case 'details': return <DetailsPage card={selectedCard} onNavigate={setCurrentPage} />;
            case 'intro': default: return <IntroPage onNavigate={setCurrentPage} />;
        }
    };

    return (
        <>
            <GlobalStyles />
            <div style={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -1 }}>
                <ParticlesBackground />
            </div>
            {renderPage()}
        </>
    );
}

export default App;
