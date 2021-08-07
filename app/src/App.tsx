import Campfire from './pages/campfire';
import Home from './pages/home';
import Topic from './pages/topic';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
<<<<<<< HEAD
                <Route path="/topic">
                    <Topic />
                </Route>
=======
>>>>>>> 6a93b465e964a50a1fe611252190e049eaae971f
                <Route path="/campfire">
                    <Campfire />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
