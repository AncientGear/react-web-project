import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Converter from './components/Tarea1';
import PartyList from './components/Tarea2';
import Welcome from './components/welcome';

class Router extends Component {

    render() {
        return (


            <Switch>
                <Route exact path="/" component={Welcome}></Route>
                <Route path="/miles-to-km" component={Converter}></Route>
                <Route path="/party-list" component={PartyList}></Route>
            </Switch>

        );
    }
}

export default Router;