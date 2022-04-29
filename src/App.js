import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Inventory from './components/inventory/Inventory';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/inventory/:id' element={<Inventory/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
