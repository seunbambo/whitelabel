import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Contact from './container/Contact/Contact';
import Hero from './container/Hero/Hero';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Contact />
  </div>
);

export default App;
