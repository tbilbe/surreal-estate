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
        <li className="item">
          <Link to="/">View Houses</Link>
        </li>
        <li className="item">
          <Link to="/add-properties">Add Houses</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
