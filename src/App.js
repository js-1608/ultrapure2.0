import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your pages
// import HomePage from './pages/HomePage';
import About from './pages/About';
import Technology from './pages/Technology';
import MarketSErved from './pages/MarketSErved';
import Product from './pages/Product';
import Resources from './pages/Resources';
import Insights from './pages/Insights';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/market-served" element={<MarketSErved />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}
