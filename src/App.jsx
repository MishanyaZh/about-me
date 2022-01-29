import React, { Suspense } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Portfolio from './views/Portfolio';
import Home from './views/Home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
