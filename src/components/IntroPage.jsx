import React from 'react';
import { AiIcon, CubeIcon, ShieldIcon } from './common/Icons';

const IntroPage = ({ onNavigate }) => (
    <div className="page min-h-screen flex flex-col items-center justify-center">
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

export default IntroPage;
