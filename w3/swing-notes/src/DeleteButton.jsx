import { useState } from "react";

function DeleteNoteButton({ note, setNotes }) {
    const handleDeleteNote = async () => {
        try {
            let response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setNotes(prevNotes => prevNotes.filter(n => n.id !== note.id));
            } else {
                console.error("There was an error!", response);
            }
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <button onClick={handleDeleteNote}>Delete Note</button>
    );
}

export default DeleteNoteButton;