import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemon } from 'redux/pokemons/pokemonsOperations';

const PokemonForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const submitValue = event.target.elements.pokemonName.value;
    dispatch(fetchPokemon(submitValue));
    setSearchValue('');
  };

  const handleInputChange = event => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="pokemonName"
          value={searchValue}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Find Pokemon</button>
    </form>
  );
};

export default PokemonForm;
