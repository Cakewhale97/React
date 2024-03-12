function handleClick({message}) {
    console.log({message});
}

function handleHover() {
    console.log("hovered");
}

export default function Clicker({ buttonText, message }) {
    const handleClick = () => {
      alert(message);
    };
    return <button onClick={handleClick}>{buttonText}</button>;
  }