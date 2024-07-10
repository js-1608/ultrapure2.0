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
import Contact from './pages/Contact';
import TopNav from './components/TopNav';
import Header from './components/Header';
import ProductDetail1 from './pages/Products/ProductDetail1';
import ProductDetail2 from './pages/Products/ProductDetail2';
import ProductDetail3 from './pages/Products/ProductDetail3';

export default function App() {
  const data = [
    { id: 1, name: 'al', description: 'Description of Product 1', path: '/product1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', path: '/product2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', path: '/product3' },
    // Add more data as needed
  ];

  return (
    <Router>
          <TopNav/>
          <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/market-served" element={<MarketSErved />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product1" element={<ProductDetail1 />} />
            <Route path="/product2" element={<ProductDetail2 />} />
            <Route path="/product3" element={<ProductDetail3 />} />
      </Routes>
    </Router>
  );
}
