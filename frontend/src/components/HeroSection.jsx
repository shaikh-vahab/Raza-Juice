import React from "react";
// import Navbar from "./Navbar";
import '../Css/HeroSection.modules.css'

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
  
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Quality</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="Orange_juice_1.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">dryfruite</h1>
              
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="Taj.png" alt="logo" width={"200px"} />

            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVRGcqb8Gytniy4plb5KspuLEImlKNRMJ5A&usqp=CAU" alt="hero" />
          </div>
          <h1 className="title dishes_title">Juices</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
