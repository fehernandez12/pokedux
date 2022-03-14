import { SET_FAVORITE, SET_POKEMON, FILTER_LIST } from "../actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
  list: [],
});

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return state.set('list', fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = state.get('list').findIndex(
        elem => elem.get('id') === action.payload.pokemonId
      );
      const isFavorite = state.getIn(['list', currentPokemonIndex, 'favorite']);
      return state.setIn(['list', currentPokemonIndex, 'favorite'], !isFavorite);
    case FILTER_LIST:
      if (action.payload.length < 1) {
        return state;
      }
      else {
        console.log('Filter action payload: ', action.payload)
        const pokemonList = state.get('list').toJS();
        console.log(pokemonList);
        const newList = pokemonList.filter(
          pokemon => pokemon.name.includes(action.payload)
        );
        return state.set('list', fromJS(newList));
      }
    default:
      return state;
  }
}