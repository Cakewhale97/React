export default function ListPicker({values}) {
    const randIdx = Math.floor(Math.random() * values.length);
    const randValue = values[randIdx];
    return (
        <div>
            <p>The list of values: {values} </p>
            <p>The random value: {randValue}</p>
        </div>
    )
}

// Passin Arrays and Objects 