// import React from "react";

import { Link } from 'react-router-dom';
import '../Css/HeroSection.modules.css'

const Main = () => {
  return (
    <>
    <div className="mainimg">
      {/* <img className="Img-glass" src="/glass.png" alt="" width={'300px'} /> */}
      <Link to={'/Juices'}><button className="OrderMenu">Order Your Favourite Juice  🔎</button></Link>
    </div>
    </>
//     
  );
};

export default Main;
