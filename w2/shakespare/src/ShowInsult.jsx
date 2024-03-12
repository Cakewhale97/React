export default function ShowInsult({ insult }) {
    return (
        <div>
        <h2>{insult.insult}</h2>
        <p>{insult.play}</p>
        </div>
    );
    }