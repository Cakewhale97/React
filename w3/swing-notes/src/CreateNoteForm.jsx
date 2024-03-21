import { useState } from "react";

function CreateNoteForm({ setNotes }) {
  const [newNote, setNewNote] = useState({ username: "", title: "", text: "" });

  const handleNewNoteChange = (event) => {
    setNewNote({ ...newNote, [event.target.name]: event.target.value });
  };

  const handleNewNoteSubmit = async (event) => {
    event.preventDefault();
    const note = {
      username: newNote.username,
      title: newNote.title,
      note: newNote.text,
    };

    try {
      let response = await fetch(
        "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await response.json();
      setNotes((prevNotes) => [...prevNotes, data]);
      setNewNote({ username: "", title: "", text: "" }); // Reset all fields
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <form onSubmit={handleNewNoteSubmit}>
      <input
        type="text"
        name="username"
        value={newNote.username}
        onChange={handleNewNoteChange}
        placeholder="Username"
      />
      <input
        type="text"
        name="title"
        value={newNote.title}
        onChange={handleNewNoteChange}
        placeholder="Title"
      />
      <textarea
        name="text"
        value={newNote.text}
        onChange={handleNewNoteChange}
        placeholder="Note"
      />
      <button type="submit">Add note</button>
    </form>
  );
}

export default CreateNoteForm;
