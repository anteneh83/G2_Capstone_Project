import React, { useEffect } from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";



const Contact= () => {
  const updateHeight = () => {
    const container = document.querySelector(".container");
    container.style.height = window.innerHeight + "px";
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: "url('Banner.png')", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#FFFFFF",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
        }}
      >
        <div>
          <h1>Contact</h1>
          <p style={{display:"flex"}}><Navigator />Contact</p>
        </div>
      </div>
      <div
        className="text-box"
        style={{
          margin: "30px",
          padding: "20px",
          backgroundColor: "#f0f0f0", 
          textAlign: "center",
          color: "black",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <div
          className="boxOne"
          style={{
            fontSize: "30px", // Dynamic font size based on viewport width
            backgroundColor: "yellow",
            maxWidth: "340px", // Scales with the screen size
            margin: "auto", // Centers the box horizontally
            padding: "10px", // Adds internal spacing
            borderRadius: "10px", // Makes it visually appealing
            wordWrap: "break-word",
            width: "90%",
          }}
        >
          <form style={{ padding: " 20px" }}>
            <input
              type="text"
              className="inputs"
              style={{ width: "300px", maxWidth: "100%" }}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="inputs"
              style={{ width: "300px", maxWidth: "100%" }}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="inputs"
              style={{ width: "300px", maxWidth: "100%" }}
              placeholder="Your Name"
            />
            <input
              type="text"
              className="inputs"
              style={{
                width: "300px",
                height: "100px",
                margin: "10px 0",
                maxWidth: "100%",
              }}
              placeholder="Your Name"
            />
            <button
              value="submit"
              style={{
                color: "white",
                background: "black",
                width: "300px",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="boxTwo" style={{ width: "600px", textAlign: "left" }}>
          <h2>Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Contact;