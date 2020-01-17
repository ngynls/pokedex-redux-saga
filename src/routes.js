import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';

class Routes extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/' component={Home} exact />
                            <Route path='/pokemon/:id' component={PokemonDetails} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;