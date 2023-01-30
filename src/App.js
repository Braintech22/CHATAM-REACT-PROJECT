import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


const App = () => {
    return ( <
        div >
        <
        Navbar / >
        <
        Routes >


        <
        Route path = '/'
        element = { < Home / > }
        /> <
        Route path = '/about'
        element = { < About / > }
        /> <
        Route path = '/contact'
        element = { < Contact / > }
        /> <
        Route path = '*'
        element = { < NotFound / > }
        /> < /
        Routes >

        <
        About / >


        <
        Footer / >




        <
        /div>
    );
};

export default App