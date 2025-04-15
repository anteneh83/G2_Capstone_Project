import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Destination from "./pages/Destination";
import About from "./pages/About";
import Package from "./pages/Package";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div style={{ color: "#ddd", height: "100vh" }}>
      <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#222" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/package">Package</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
