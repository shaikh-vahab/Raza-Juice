import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/public/juice_logo.png'
import '../Css/Navigation.modules.css'
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo"><img src={Logo} alt="" width={'150px'}/></div>
        <div className='navLinks'>
          <div className="links">
        <ul className="Home-ul">
          <li>Home</li>
          <li>Juices</li>
          <li>Dryfruits</li>
          <li>Menus</li>
          <li>ContactUs</li>
          <li>AboutUs</li>
        </ul>
          
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
    
      </nav>
    </>
  );
};

export default Navbar;
