function Notes({ note }) {
    return (
        <div>
            <h2>Note</h2>
            <p>{note.username} - {note.title}: {note.note}</p>
        </div>
    );
}

export default Notes;