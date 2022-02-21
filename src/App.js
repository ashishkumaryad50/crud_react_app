import React from 'react';
import Header from './Components/Header';
import './App.css';
import ShowData from './Components/ShowData'
import NewData from './Components/NewData';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './Components/UI/Card'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Navigate replace to='/home' />} /> */}
        <Route path='/' element={<Card clasName={'showdata'}><ShowData /></Card>} />
        <Route path='/add' element={<NewData />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;