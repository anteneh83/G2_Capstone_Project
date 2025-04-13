import React, { useContext } from 'react';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Blog from './Blog';
import Destination from './Destination';
import About from'./About';
import Package from './Package';
import NotFound from './NotFound';







function App() {

 
  return (
    <div
      style={{
        padding: "0px",
        margin: "0px",
        boxSizing: "border-box",
        color: "#ddd",
        height: "100vh",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav
        className="main-nav"
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgba(32, 32, 32, 0.46)",
          position: "absolute",
          zIndex: 1,
          width: "100vw",
          maxWidth:"100%",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        <Link to="/">
          <img src="src/assets/logo1 2.png" style={{ maxWidth: "50vw", height: "auto" }} />
        </Link>

        <Link
          to="/"
          style={{
            color: "#FFFFFFCC",
            fontWeight: 600,
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "#FFFFFFCC",
            fontWeight: "600",
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          About Us
        </Link>
        <Link
          to="/package"
          style={{
            color: "#FFFFFFCC",
            fontWeight: 600,
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          Package
          <img src="Vector.png" />
        </Link>
        <Link
          to="/destination"
          style={{
            color: "#FFFFFFCC",
            fontWeight: 600,
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          Destination
          <img src="Vector.png" />
        </Link>
        <Link
          to="/blog"
          style={{
            color: "#FFFFFFCC",
            fontWeight: 600,
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          Blog
          <img src="Vector.png" />
        </Link>
        <Link
          to="/contact"
          style={{
            color: "#FFFFFFCC",
            fontWeight: 600,
            textDecoration: "none",
            margin: "5px 10px",
          }}
        >
          Contact
        </Link>
        <img src="Vector1.png" />
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </div>
    </div>
  );
  
}

export default App;
