import react, { useEffect, useState } from "react";
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR, colors } from "../../utils/constants";
import { Image, Label, Grid, Icon, Popup, Progress } from "semantic-ui-react";
import './styles.css';
import { useDispatch } from "react-redux";
import { setFavorite, filterPokemon } from "../../actions";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  };

  const getStatSum = () => {
    let total = 0;
    pokemon.stats.forEach(stat => {
      total += stat.base_stat
    });
    return total;
  }

  const getBaseColor = () => {
    let value = getStatSum();
    if (value <= 156) {
      return 'red';
    }
    else if (value <= 312 && value > 156) {
      return 'orange';
    }
    else if (value <= 468 && value > 312) {
      return 'yellow';
    }
    else if (value <= 624 && value > 468) {
      return 'olive';
    }
    else if (value <= 780 && value > 624) {
      return 'green';
    }
    else {
      return 'grey';
    }
  }

  const getStatColor = (value) => {
    if (value <= 51) {
      return 'red';
    }
    else if (value <= 102 && value > 51) {
      return 'orange';
    }
    else if (value <= 153 && value > 102) {
      return 'yellow';
    }
    else if (value <= 204 && value > 153) {
      return 'olive';
    }
    else if (value <= 255 && value > 204) {
      return 'green';
    }
    else {
      return 'grey';
    }
  };

  const capitalize = (string) => {
    let str = string.replace('-', ' ');
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;
  if (!pokemon) return null;
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="PokemonCard">
        <button className="PokemonCard-favorite" onClick={handleFavorite}>
          <Icon name="favorite" color={color} />
        </button>
        <Popup trigger={
          <Image centered src={pokemon.sprites.other.home.front_default} alt='Pokemon Front' />
        }>
          <Popup.Content>
            <Image centered src={pokemon.sprites.other.home.front_shiny} alt='Shiny Front' />
          </Popup.Content>
        </Popup>
        <h3 className="PokemonCard-title">{capitalize(pokemon.name)}</h3>
        <Progress progress='value' value={getStatSum()} color={getBaseColor()} total={780} size='small'>Base stat total</Progress>
        <hr />
        {pokemon.stats.map(
          stat => (
            <Progress progress='value' value={stat.base_stat} total={255} color={getStatColor(stat.base_stat)} size='small'>{capitalize(stat.stat.name)}</Progress>
          )
        )}
        <hr />
        {pokemon.types.map((type => (
          <Label color={
            colors.find(
              (color) => color.type == type.type.name
            ).color
          } key={`${pokemon.id}-${type.type.name}`}>{capitalize(type.type.name)}</Label>
        )))}
      </div>
    </Grid.Column>
  );
}

export { PokemonCard };

