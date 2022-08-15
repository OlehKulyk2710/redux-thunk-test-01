import { createAction } from '@reduxjs/toolkit';

export const fetchPokemonsRequest = createAction('books/fetchPokemonsRequest');

export const fetchPokemonsSuccess = createAction('books/fetchPokemonsSuccess');

export const fetchPokemonsError = createAction('books/fetchPokemonsError');
