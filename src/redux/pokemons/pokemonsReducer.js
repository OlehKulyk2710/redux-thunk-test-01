import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as pokemonsActions from './pokemonsActions';
import { fetchPokemon } from './pokemonsOperations';

// const pokemon = createReducer([], {
//   [pokemonsActions.fetchPokemonsSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [pokemonsActions.fetchPokemonsRequest]: () => true,
//   [pokemonsActions.fetchPokemonsSuccess]: () => false,
//   [pokemonsActions.fetchPokemonsError]: () => false,
// });

// const error = createReducer(null, {
//   [pokemonsActions.fetchPokemonsError]: (_, action) => action.payload,
//   [pokemonsActions.fetchPokemonsRequest]: () => null,
// });

// export const rootReducer = combineReducers({
//   pokemon,
//   isLoading,
//   error,
// });

const pokemon = createReducer([], {
  [fetchPokemon.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchPokemon.pending]: () => true,
  [fetchPokemon.fulfilled]: () => false,
  [fetchPokemon.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchPokemon.rejected]: (_, action) => action.payload,
  [fetchPokemon.pending]: () => null,
});

export const rootReducer = combineReducers({
  pokemon,
  isLoading,
  error,
});
