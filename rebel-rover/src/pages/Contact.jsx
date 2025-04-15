import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import ContactForm from "./components/contactForm";
import ContactBox from "./components/contactBox";



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
          backgroundImage: "url('src/assets/Banner.png')",
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
          <p style={{ display: "flex" }}>
            <Navigator />
            Contact
          </p>
        </div>
      </div>
      <div
        className="text-box"
        style={{
          margin: "30px",
          padding: "20px",
          backgroundColor: "#fff",
          textAlign: "center",
          color: "black",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ContactForm/>
        

        <div
          className="boxTwo"
          style={{
            width: "600px",
            textAlign: "left",
            padding: "0px",
            fontSize: "small",
          }}
        >
          <h2
            style={{
              fontSize: "30px",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              color: "#343434",
              fontSize: "13px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <ContactBox/>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};


export default Contact;