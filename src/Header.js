/**
 * Created by Wojtek on 2017-12-12.
 */
import React from 'react';

import logo from './logo.svg';
import './App.css';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
        </header>
    )
};

export default Header;