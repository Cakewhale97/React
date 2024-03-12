import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import DrawingPanel from './DrawingPanel';

function Editor({ dimensions }) {
    const [color, setColor] = useState('#000000');

    const handleChange = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div>
            <SketchPicker color={color} onChange={handleChange} />
            <DrawingPanel dimensions={dimensions} color={color} />
        </div>
    );
}

export default Editor;