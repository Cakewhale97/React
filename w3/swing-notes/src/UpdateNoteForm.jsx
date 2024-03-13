import { useState } from "react";

function UpdateNoteForm({ note, setNotes }) {
  const [updatedNote, setUpdatedNote] = useState({ note: note.note });

  const handleUpdatedNoteChange = (event) => {
    setUpdatedNote({ ...updatedNote, [event.target.name]: event.target.value });
  };

  const handleUpdatedNoteSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await fetch(
        `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedNote),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await response.json();

      // After the note is updated, update the `notes` state in the parent component
      setNotes((prevNotes) =>
        prevNotes.map((n) =>
          n.id === note.id ? { ...n, note: updatedNote.note } : n
        )
      );
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <form onSubmit={handleUpdatedNoteSubmit}>
      <textarea
        name="note"
        value={updatedNote.note}
        onChange={handleUpdatedNoteChange}
        placeholder="Update note"
      />
      <button type="submit">Update note</button>
    </form>
  );
}

export default UpdateNoteForm;
