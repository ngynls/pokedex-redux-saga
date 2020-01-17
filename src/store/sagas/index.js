import watchFetchPokemon from './fetchPokemonSaga';
import watchFetchPokemonDetails from './fetchPokemonDetailsSaga';
import { fork, all } from 'redux-saga/effects';

function* rootSaga(){
    yield all([
        fork(watchFetchPokemon),
        fork(watchFetchPokemonDetails),
    ]);
}

export default rootSaga;