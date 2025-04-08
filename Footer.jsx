import React from "react";
function Footer(){
    return(
        <div><div
          style={{
            backgroundImage: "url('unsplash_TejFa7VW5e4.png')", // Replace with your image URL
            height: "550px",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex", // Use Flexbox
            justifyContent: "center", // Center horizontally
            alignItems: "center",
          }}
        >
          <div
            style={{ position: "relative", width: "500px", maxWidth: "90vw" }}
          >
            <input
              type="text"
              placeholder="Type here..."
              style={{
                width: "100%", // Fill container width
                padding: "10px 60px 10px 10px", // Bigger padding
                height: "50px", // Taller input
                fontSize: "18px", // Larger text
                boxSizing: "border-box", // Ensures padding doesn't affect input size
                border: "none",
                borderRadius: "30px",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "8px", // Gap between button and input edge
                top: "8px", // Aligns button with the input vertically
                height: "35px", // Adjust button height as needed
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "20px", // Optional for rounded corners
                cursor: "pointer",
                display: "flex", // Makes the button a flex container
                justifyContent: "center", // Centers content horizontally
                alignItems: "center",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div
          className="boxThree"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div style={{}}>
            <img src="logo 5.png" style={{ maxWidth: "60vw" }} />
            <p style={{ width: "400px", padding: "20px", maxWidth: "90vw" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>
          <div>
            <h4>Contact Information</h4> <p>732 Despard St, Atlanta</p>
            <p>+97 888 8888 </p>
            <p>info@traveller.com</p>
          </div>
          <div>
            <h4>Quick Link</h4>
          </div>
          <div>
            <h4>Follow Us</h4>
          </div>
        </div>
        <div
          style={{
            display: "flex", // Flexbox for centering
            justifyContent: "center", // Horizontal centering
            alignItems: "center", // Vertical centering
            backgroundColor: "black", // Background color for the div
            padding: "20px", // Optional padding
            color: "white", // Text color
            textAlign: "center", // Align text inside the div
          }}
        >
          Copyright © All rights reserved (Website Developed & Managed by
          creativechroma)
        </div></div>
        
    );
    
}export default Footer;