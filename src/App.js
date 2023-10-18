
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Menu from './pages/Menu';
import FoodInfo from './pages/FoodInfo';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path="/kategoriler" element={<Menu />} />
        <Route path='/kategoriler/:categoryId' element={<FoodInfo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
