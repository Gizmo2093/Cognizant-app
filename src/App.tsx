import React from 'react';
import './App.css';

import { Homepage } from './components/Homepage'
import { Cart } from './components/Cart'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

const App:React.FC = () => {

  return (
  <>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path='/cart' element={<Cart />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
