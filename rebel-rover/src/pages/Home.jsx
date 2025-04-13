import React, { useEffect } from "react";
import Navigator from "./Navigator";

const Home = () => {
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
          backgroundImage:
            "url('suitcase-travel-summer-holidays-vacation-travelers-luggage 1.png')", // Replace with your image URL
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#FFFFFF",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
        }}
        
      >
       
        <h1
          style={{
            color: "white",
            textAlign: "center",
            transform: "translateY(300px)",
          }}
        >
         
        </h1>
      </div>
    </div>
  );
};

export default Home;
