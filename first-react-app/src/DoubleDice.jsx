export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  return (
    <div>
        <h2>Double Dice</h2>
        {num1 === num2 ? <p>You Win</p> : <p>Try Again</p>}
      <p>Num1: {num1} </p>
      <p>Num2: {num2}</p>
    </div>
  );
}


//React Conditionals 
// {num1 === num2 && <p>You Win</p>}

