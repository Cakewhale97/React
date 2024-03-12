import React, { useState } from "react";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";

function SplitTheNote() {
  const [sum, setSum] = useState(0);
  const [friends, setFriends] = useState(1);
  const [tip, setTip] = useState(0);
  const [result, setResult] = useState(0);

  const calculateSplit = () => {
    const total = sum * (1 + tip / 100);
    setResult(total / friends);
  };

  return (
    <div>
      <h1>Split the Note</h1>
      <InputField label="Total" value={sum} setValue={setSum} />
      <InputField
        label="Number of friends"
        value={friends}
        setValue={setFriends}
      />
      <InputField label="Tip" value={tip} setValue={setTip} />
      <button onClick={calculateSplit}>Calculate</button>
      <ResultDisplay result={result} />
    </div>
  );
}

export default SplitTheNote;
