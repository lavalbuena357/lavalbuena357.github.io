import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route path='/' component={Nav} />
    </div>
  );
}

export default App;
