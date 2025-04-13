import React from "react";
function Footer(){
    return (
      <div>
        <div
          style={{
            backgroundImage:"url('src/assets/image-for-footer.png')",
            height: "450px",
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
              placeholder="Type your email here"
              style={{
                width: "100%",
                padding: "10px 60px 10px 10px", 
                height: "48px", 
                fontSize: "18px", 
                boxSizing: "border-box", 
                border: "none",
                borderRadius: "30px",
                transform: "translateY(80px)",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "4px", 
                top: "84px", 
                height: "40px", 
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "20px", 
                cursor: "pointer",
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: "110px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div
          className="sub-footer"
          style={{
            backgroundColor: "whitesmoke",
            color: "gray",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "4vw",
            textAlign: "left",
          }}
        >
          <div style={{ margin: "20px 0px" }}>
            <div className="group-1">
              <img
                style={{ width:"396px",maxWidth: "60vw" }}
                className="logo-3"
                src="src/assets/logo-for-footer.png"
                alt="logo"
              />
            </div>

            <div
              style={{
                color: "#6C6C6C",
                width: "437px",
                maxWidth: "80vw",
                margin: " 20px 0",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus perferendis elit
            </div>
          </div>

          <div
            style={{
              margin: "20px",
            }}
            className="group-3"
          >
            <p
              style={{
                fontSize: "larger",
                fontWeight: "900",
                color: "black",
              }}
              className="contactInfo"
            >
              Contact Information
            </p>
            <p className="loc">
              <ion-icon
                style={{ color: "black" }}
                name="location-sharp"
                className="ion"
              />
              732 Despard St, Atlanta
            </p>
            <p style={{}} className="ioc">
              <ion-icon
                style={{ color: "black" }}
                name="mail"
                className="ion"
              />
              +97 888 8888
            </p>
            <p style={{}} className="ioc">
              <ion-icon
                style={{ color: "black" }}
                name="call-sharp"
                className="ion"
              />{" "}
              info@traveller.com
            </p>
          </div>

          <div className="group-4" style={{ margin: "20px" }}>
            <p
              style={{
                fontSize: "larger",
                fontWeight: "900",
                color: "black",
              }}
              className="Quick-Link"
            >
              Quick Link
            </p>
            <p style={{ fontWeight: "500" }} className="iop">
              Home
            </p>
            <p style={{ fontWeight: "500" }} className="iop">
              About Us
            </p>
            <p style={{ fontWeight: "500" }} className="iop">
              Tours
            </p>
            <p style={{ fontWeight: "500" }} className="iop">
              Contact
            </p>
          </div>

          <div className="follow" style={{ margin: "20px", maxWidth: "300px" }}>
            <p
              style={{
                fontSize: "larger",
                fontWeight: "900",
                color: "black",
              }}
              className="flo"
            >
              Follow Us
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "black",
                gap: "15px",
              }}
              className="fow"
            >
              <ion-icon name="logo-facebook" />
              <ion-icon name="logo-twitter" />
              <ion-icon name="logo-youtube" />
              <ion-icon name="logo-instagram" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            padding: "20px",
            color: "white",
            textAlign: "center",
            height: "42px",
          }}
        >
          Copyright © All rights reserved (Website Developed & Managed by
          creativechroma)
        </div>
      </div>
    );
    
}export default Footer;