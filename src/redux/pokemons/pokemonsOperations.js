import * as PokemonsActions from './pokemonsActions';

export const fetchPokemon = value => async dispatch => {
  dispatch(PokemonsActions.fetchPokemonsRequest());

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    if (!response.ok) {
      throw new Error('popa');
    }

    response.json().then(data => {
      dispatch(PokemonsActions.fetchPokemonsSuccess(data));
    });
  } catch (error) {
    dispatch(PokemonsActions.fetchPokemonsError(error.message));
    console.log(error.message);
  }
};
