// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

import './App.css';
import Juices from './Pages/pages/Juices';
import Dryfruits from './Pages/Pages/Dryfruits';
import Navbar from './components/Navbar';
import Menus from './Pages/pages/Menus'
// import MakeReservation from './Pages/pages/MakeReservation'
import MakeReservation from './Pages/pages/MakeReservation'
import About from './Pages/pages/About'
// import Dryfruits from './Pages/Pages/Dryfruit';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Juices" element={<Juices />} />
        <Route path="/Dryfruits" element={<Dryfruits />} />
        <Route path="/Menus" element={<Menus />} />
        <Route path="/About" element={<About />} />
        <Route path="/MakeReservation" element={<MakeReservation />} />

      </Routes>
    </>
  );
}

export default App;