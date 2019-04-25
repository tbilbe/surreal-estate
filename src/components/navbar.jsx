import React from 'react';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faDungeon} className="icon" /> Surreal Estate
      <ul className="nav">
        <li className="item">View Houses</li>
        <li className="item">Add Houses</li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
