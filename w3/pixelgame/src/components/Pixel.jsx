import React, { useState } from 'react';

function Pixel({ color }) {
    const [pixelColor, setPixelColor] = useState('white');

    const handleClick = () => {
        setPixelColor(color);
    };

    return (
        <div 
            onClick={handleClick} 
            style={{ 
                backgroundColor: pixelColor, 
                width: '20px', 
                height: '20px', 
                border: '1px solid #000'
            }} 
        />
    );
}

export default Pixel;