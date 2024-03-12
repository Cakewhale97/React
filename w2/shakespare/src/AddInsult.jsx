// AddInsult.jsx
import React, { useState } from 'react';

export default function AddInsult({ addInsult }) {
    const [newInsult, setNewInsult] = useState({ insult: '', play: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addInsult(newInsult);
        setNewInsult({ insult: '', play: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newInsult.insult}
                onChange={(e) => setNewInsult({ ...newInsult, insult: e.target.value })}
                placeholder="Insult"
            />
            <input
                type="text"
                value={newInsult.play}
                onChange={(e) => setNewInsult({ ...newInsult, play: e.target.value })}
                placeholder="Play"
            />
            <button type="submit">Add Insult</button>
        </form>
    );
}