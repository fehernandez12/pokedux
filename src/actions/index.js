import { SET_POKEMON, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE, FILTER_LIST } from "./types";
import { getPokemon, getPokemonWithDetails, getAbilityWithDetails } from "../api/service";

export const setPokemonList = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const toggleLoader = () => ({
  type: TOGGLE_LOADER
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

export const filterPokemon = (payload) => ({
  type: FILTER_LIST,
  payload
});

export const fetchPokemonWithDetails = () =>
  async (dispatch) => {
  try {
    dispatch(toggleLoader());
    const response = await getPokemon();
    const pokemonList = response.results;
    const pokemonWithDetails = await getPokemonWithDetails(pokemonList);
    dispatch(setPokemonList(pokemonWithDetails));
    dispatch(toggleLoader());
  } catch (error) {
    dispatch(setError({ message: 'Oops! Something went wrong: ', error }));
    dispatch(toggleLoader());
  }
};