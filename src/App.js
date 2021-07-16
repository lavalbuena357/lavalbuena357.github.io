import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Main} />
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
