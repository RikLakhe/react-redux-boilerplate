import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/Icon.ico'

const Logo = () => (
  <Link to={`/`} className="navbar-brand">
    <img src={logo} alt="Boiler" height="40" className="d-none d-md-inline" />
  </Link>
);

export default Logo;
