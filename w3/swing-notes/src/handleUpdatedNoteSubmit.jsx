const handleUpdatedNoteSubmit = async (event) => {
  event.preventDefault();

  try {
    let response = await fetch(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();

    // After the note is updated, update the `notes` state in the parent component
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === note.id ? data : n))
    );
  } catch (error) {
    console.error("There was an error!", error);
  }
};
