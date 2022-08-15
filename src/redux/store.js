import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './pokemons/pokemonsReducer';

export const store = configureStore({
  reducer: {
    pokemons: rootReducer,
  },
});
