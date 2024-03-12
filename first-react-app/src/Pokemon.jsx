

function Pokemon() {
    const randomPokemon = Math.floor(Math.random() * 150);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemon}.png`;
    return (
        <div className="Pokemon">
            <h1>Pokemon #{randomPokemon}</h1>
            <img src={imageUrl} alt={`Pokemon ${randomPokemon}`} />
        </div>
    );
}

export default Pokemon;