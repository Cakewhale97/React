import './App.css'
import React, { useState } from 'react'
import Header from './Header'
import ShowInsult from './ShowInsult'
import AddInsult from './AddInsult'

function App() {
  const [insult, setInsult] = useState([
    { insult: "You're a waste of space.", play: "The Office" },
    { insult: "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?", play: "Macbeth" },
    { insult: "You are as a candle, the better burnt out.", play: "Henry IV" },
    { insult: "You are not worth another word, else I'd call you knave.", play: "All's Well That Ends Well" },
    { insult: "You are not worth the dust which the rude wind Blows in your face.", play: "King Lear" },
    { insult: "He thinks too much: such men are dangerous.", play: "Julius Caesar" },
    { insult: "It is a tale Told by an idiot, full of sound and fury, Signifying nothing.", play: "Macbeth" },
  ])

  const addInsult = (newInsult) => {
    setInsult([...insult, newInsult]);
    console.log(insult);
  };

   return (
      <div className="App">
         <Header />
         {insult.map((insult, index) => (
          <ShowInsult key={index} insult={insult} />
           ))}
          <AddInsult addInsult={addInsult} />
      </div>
   );
}

export default App
