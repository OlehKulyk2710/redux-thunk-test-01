import { createAction } from '@reduxjs/toolkit';

export const fetchPokemonsRequest = createAction(
  'pokemons/fetchPokemonsRequest'
);

export const fetchPokemonsSuccess = createAction(
  'pokemons/fetchPokemonsSuccess'
);

export const fetchPokemonsError = createAction('pokemons/fetchPokemonsError');
