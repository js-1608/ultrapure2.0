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
import Faq from './pages/Faq';
import WorkWithUs from './pages/WorkWithUs';
import Download from './pages/Download';
import Gallery from './pages/Gallery';
import Aop from './pages/Products/Aop';
import OdorNOX from './pages/Products/OdorNOX';
import Virushield from './pages/Products/Virushield';
import Corrosion from './pages/Products/Corrosion';
import Germinox from './pages/Products/Germinox';
import FalconS from './pages/Products/FalconS';
import Falconc from './pages/Products/FalconC';
import CBR from './pages/Products/CBR';
import UltraSORB from './pages/Products/UltraSORB';
import ESP from './pages/Products/ESP';
import Commerical from './pages/market_served/Commerical';
import CS from './pages/Products/CS';
import Industrial from './pages/market_served/Industrail';
import Food from './pages/market_served/Food';
import Material from './pages/market_served/Material';
import Waste from './pages/market_served/Waste';
import Report from './pages/Report';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import NotFound from './pages/NotFound';
import WhatsAppIcon from './components/WhatsAppIcon';

export default function App() {
  return (
    <Router>
            <Scroll/> {/* Include the ScrollToTop component */}

          <TopNav/>
          <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/technology" element={<Technology/>} />
        <Route path="/market-served" element={<MarketSErved/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/work" element={<WorkWithUs/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/report" element={<Report/>} />





            <Route path="/aop" element={<Aop/>} />
            <Route path="/OdorNOX" element={<OdorNOX/>} />
            <Route path="/vap" element={<Virushield/>} />
            <Route path="/Ccu" element={<Corrosion/>} />
            <Route path="/gap" element={<Germinox/>} />
            <Route path="/fsap" element={<FalconS/>} />
            <Route path="/fcap" element={<Falconc/>} />
            <Route path="/cf" element={<CBR/>} />
            <Route path="/ucm" element={<UltraSORB/>} />
            <Route path="/ef" element={<ESP/>} />
            <Route path="/csap" element={<CS/>}/>


            <Route path="/commercial" element={<Commerical/>} />
            <Route path="/industrial" element={<Industrial/>} />
            <Route path="/food" element={<Food/>} />
            <Route path="/material" element={<Material/>} />
            <Route path="/waste" element={<Waste/>} />

              {/* Add the NotFound Route as the last Route */}
              <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
      {/* <WhatsAppIcon /> */}

    </Router>
  );
}
