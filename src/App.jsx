import React, { Suspense } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import Portfolio from './views/Portfolio';
import Home from './views/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-bar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/portfolio">
          <button>Portfolio</button>
        </Link>
      </nav>

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
