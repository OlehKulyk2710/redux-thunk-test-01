import { useSelector } from 'react-redux';
import { getPokemon } from 'redux/pokemons/pokemonsSelectors';

const PokemonInfo = () => {
  const pokemon = useSelector(getPokemon);

  return (
    <div>
      {/* {error && <h1>{this.state.error.message}</h1>} */}
      {/* {loading && <div>Loading...</div>} */}
      {pokemon.name && (
        <>
          <div>{pokemon.name}</div>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt=""
            width="100"
          />
        </>
      )}
    </div>
  );
};

export default PokemonInfo;
