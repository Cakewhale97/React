import "./App.css";
import { useState } from "react";
import Editor from "./components/Editor";
function App() {
  const [dimensions, setDimensions] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { width, height } = event.target.elements;
    setDimensions({
      width: width.value,
      height: height.value,
    });
  };

  return dimensions ? (
    <Editor dimensions={dimensions} />
  ) : (
    <form onSubmit={handleSubmit}>
      <input name="width" type="number" placeholder="Width" required />
      <input name="height" type="number" placeholder="Height" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
