import "../styles/modules/Image.css";
import React from 'react';

function Image() {
  return (
    <div className="Image">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" alt="Ada Lovelace" style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: '50%', border: '2px solid black', marginTop: 20, marginBottom: 20 }} />
    </div>
  );
}

export default Image;