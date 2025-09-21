import React from 'react';

const GlobalStyles = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        html {
            background-color: #000;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: transparent;
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

export default GlobalStyles;
