import { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/MemeGenerator.css";

Modal.setAppElement("#root");

export default function MemeGenerator() {
  const [templates, setTemplates] = useState([]);
  const [currentMemes, setCurrentMemes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.memegen.link/templates")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        generateRandomMemes(data);
        console.log(data);
      });
  }, []);

  const generateRandomMemes = (data) => {
    let randomMemes = [];
    for (let i = 0; i < 8; i++) {
      let randomIndex = Math.floor(Math.random() * data.length);
      randomMemes.push(data[randomIndex]);
      data.splice(randomIndex, 1);
    }
    setCurrentMemes(randomMemes);
  };

  const handleNextMeme = () => {
    generateRandomMemes(templates);
  };

  const openModal = (meme) => {
    setSelectedMeme(meme);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  return (
    <div className="MemeGenerator">
      <h2>Meme Generator </h2>
      <div className="Meme">
        {currentMemes.map((template) => (
          <div key={template.id} onClick={() => openModal(template)}>
            <p>{template.name}</p>
            <img
              src={template.blank}
              alt={template.name}
              className="meme-img"
            />
          </div>
        ))}
      </div>
      <button onClick={handleNextMeme}>Generate New Memes</button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
        <button onClick={closeModal}>Close</button>
        {selectedMeme && (
          <img
            src={selectedMeme.blank}
            alt={selectedMeme.name}
            className="meme-img-large"
          />
        )}
        </Modal>
    </div>
  );
}
