import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import './styles.css';
import { fetchPokemonWithDetails, filterPokemon } from '../../actions';
import { useDispatch } from 'react-redux';

export default function Searcher() {
  // const handleSearch = () => {
  //   dispatch(filterPokemon({}))
  // };
  const dispatch = useDispatch();

  const handleSearch = React.useCallback(
    (e, data) => {
      console.log('Handling search...')
      if (data.value.length === 0) {
        dispatch(fetchPokemonWithDetails());
        return;
      }
      dispatch(filterPokemon(data.value.toLowerCase()));
    }
  );

  return (
    <div className='Searcher wrapper'>
      <Grid>
        <Grid.Column
          widescreen={10}
          largeScreen={10}
          mobile={16}
          className='Searcher'
        >
          <Search
            aligned='right'
            input={{ fluid: true }}
            showNoResults={false}
            placeholder='Encuentra a tu Pokemón favorito'
            onSearchChange={handleSearch}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}
