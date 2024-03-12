import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "🎉" }]);  //This line initializes(assigning a value to a data variable) the emojis state with an array containing one object. 
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "🤬" }]); //This is a function addEmoji that updates the emojis state. It uses the setEmojis function(which is the state updater function returned by useState) to add a new object to the emojis array
  };

  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
      return oldEmojis.filter((e) => e.id !== id);
    });
  };

  return (
    <div>
      {emojis.map((e) => (      // This is the JSX element returned for each emoji object in the emojis array. 
        <span
          onClick={() => deleteEmoji(e.id)}
          key={e.id}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
