import axios from "axios";
import axiosInstance, { axiosUrlInstance } from "./config"

export const getPokemon = (limit = 493) => {
  return axiosInstance.get(`/pokemon?limit=${limit}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export const getPokemonWithDetails = (pokemonList) => {
  return Promise.all(
    pokemonList.map(
      (pokemon) => axios.get(pokemon.url)
    )
  ).then(
    (pokemonResponses) => {
      return pokemonResponses.map(
        (response) => response.data
      )
    }
  );
}

export const getStatWithDetails = (statUrl) => {
  let api = axiosUrlInstance(statUrl);
  return api.get()
    .then(response => response.data)
    .catch(error => console.log(error));
}