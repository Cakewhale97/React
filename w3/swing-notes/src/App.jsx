import { useState } from "react";
import FetchNotesButton from "./FetchNotesButton";
import CreateNoteForm from "./CreateNoteForm";
import Notes from "./Notes";
import UpdateNoteForm from "./UpdateNoteForm";

function App() {
  const [username, setUsername] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <FetchNotesButton setUsername={setUsername} setNotes={setNotes} />
      <CreateNoteForm username={username} setNotes={setNotes} />
      {notes.map((note, index) => (
        <div key={index}>
          <Notes note={note} />
          <UpdateNoteForm note={note} setNotes={setNotes} />
        </div>
      ))}
    </div>
  );
}

export default App;
