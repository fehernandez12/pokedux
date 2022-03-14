import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from '../../components/Searcher';
import { PokemonList } from '../../components/PokemonList';
import './styles.css';
import { fetchPokemonWithDetails, filterPokemon } from '../../actions';
import { Loader } from '../../components/Loader';



function Home() {
  const loading = useSelector((state) => state.getIn(['ui', 'loading']));
  const list = useSelector((state) => state.getIn(['pokemon', 'list'])).toJS();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
  }, []);

  const handleSearch = () => {
    dispatch(filterPokemon({}))
  };

  return (
    <div className='Home'>
      <Searcher />
      {loading && <Loader />}
      <PokemonList pokemonList={list} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
}

export default Home;
