import react from "react";
import { Grid } from "semantic-ui-react";
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({pokemonList}) => {

  return (
    <Grid className="PokemonList">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />
      ))}
    </Grid>
  );
}

PokemonList.defaultProps = {
  pokemonList: []
}

export { PokemonList };