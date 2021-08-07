import Campfire from './pages/campfire';
import Home from './pages/home';
import Topic from './pages/topic';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import LookupPage from './pages/search';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/topic/:id?">
                    <Topic />
                </Route>
                <Route path="/campfire">
                    <Campfire />
                </Route>
                <Route path="/search">
                    <LookupPage />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
