import { useState } from "react";
import axios from "axios";

function UserInput({ setUsername, setNotes }) {
    const [usernameInput, setUsernameInput] = useState('');

    const handleUsernameChange = (event) => {
        setUsernameInput(event.target.value);
    };

    const handleFetchNotes = () => {
        if (usernameInput) {
            setUsername(usernameInput);
            axios.get(`https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${usernameInput}`)
                .then(response => {
                    setNotes(response.data.notes);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    };

    return (
        <div>
            <input type="text" onChange={handleUsernameChange} placeholder="Enter a username "/>
            <button onClick={handleFetchNotes}>Fetch Notes</button>
        </div>
    );
}

export default UserInput;