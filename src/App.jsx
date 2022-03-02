import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Main /> } />
        <Route path='/portafolio' element={<Projects /> } />
        <Route path='/contacto' element={<Contact /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
