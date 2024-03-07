// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import Logo from '/public/juice_logo.png'; // Import the correct image file
import '../Css/Navigation.modules.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Juice Logo" width={'100px'} />
        </div>
        <div className='navLinks'>
          <div className="links">
            <ul className="Home-ul">
              <li><Link to="/">Home</Link></li>
              <li><Link to={'/Juices'}>Juices</Link></li>
              <li><Link to={'/Dryfruits'}>Dryfruits</Link></li>
              <li><Link to={'/Menus'}>Menus</Link></li>
              <li><Link to={'/About'}>About</Link></li>
              <li><Link to={'/MakeReservation'}>Make-Reservation</Link></li>
            </ul>
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
