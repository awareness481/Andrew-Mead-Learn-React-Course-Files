import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <h1>My Portofolio</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/portofolio" activeClassName="is-active" exact={true}>Portofolio</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact us</NavLink>
      </header>
    )
  }

export default Header;