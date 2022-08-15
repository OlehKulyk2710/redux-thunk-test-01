import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as pokemonsActions from './pokemonsActions';

const pokemon = createReducer([], {
  [pokemonsActions.fetchPokemonsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [pokemonsActions.fetchPokemonsRequest]: () => true,
  [pokemonsActions.fetchPokemonsSuccess]: () => false,
  [pokemonsActions.fetchPokemonsError]: () => false,
});

const error = createReducer(null, {
  [pokemonsActions.fetchPokemonsError]: (_, action) => action.payload,
  [pokemonsActions.fetchPokemonsRequest]: () => null,
});

export const rootReducer = combineReducers({
  pokemon,
  isLoading,
  error,
});
