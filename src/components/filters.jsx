import React from 'react';
import { Link } from 'react-router-dom';

const Filters = props => {
  return (
    <div>
      <div className="topbar">
        <span>Filter by City: </span>
        <Link className="sidebar" to={''}>
          All
        </Link>
        <Link
          className="sidebar"
          to={props.buildQueryString('query', { city: 'Leeds' })}>
          Leeds
        </Link>
        <Link
          className="sidebar"
          to={props.buildQueryString('query', { city: 'Liverpool' })}>
          Liverpool
        </Link>
        <Link
          className="sidebar"
          to={props.buildQueryString('query', { city: 'Manchester' })}>
          Manchester
        </Link>
        <Link
          className="sidebar"
          to={props.buildQueryString('query', { city: 'Sheffield' })}>
          Sheffield
        </Link>
      </div>
      <div>
        <span>Sort:</span>
        <Link
          className="babySideBar"
          to={props.buildQueryString('sort', { price: -1 })}>
          Price Descending
        </Link>
        <Link
          className="babySideBar"
          to={props.buildQueryString('sort', { bedrooms: -1 })}>
          Bedrooms Descending
        </Link>
      </div>
    </div>
  );
};

export default Filters;
