import "../styles/modules/Header.css";
export default function ({ name }) {
  return (
    <header className="Header">
      <div className="Nav">
        <h1 className="Logo">{name}</h1>
        <div className="Links">
        <a href="Home">Home</a>
        <a href="<About">About</a>
        <a href="Contact">Contact</a>
        </div>
        
      </div>
    </header>
  );
}
