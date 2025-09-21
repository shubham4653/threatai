import React from 'react';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
    return (
        <iframe
            src="/background/main.html"
            title="particles-background"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'none'
            }}

        />
    );
};

export default ParticlesBackground;
