import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDungeon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon icon={faDungeon} className="icon" /> Surreal Estate
      <ul className="nav">
        <Link to="/">
          <li className="item">View Houses</li>
        </Link>
        <Link to="/add-properties">
          <li className="item">Add Houses</li>
        </Link>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
