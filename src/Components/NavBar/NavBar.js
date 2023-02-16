import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './NavBar.module.css';

const NavBar = ({ style, onClick }) => {
  let activeStyle = {
    fontWeight: '700',
  };

  return (
    <div>
      <nav className={style}>
        <NavLink
          to="/"
          className={nav.item}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={onClick}
        >
          Home
        </NavLink>
        <NavLink
          to="/Mission"
          className={nav.item}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={onClick}
        >
          Our mission
        </NavLink>
        <NavLink
          to="/Places"
          className={nav.item}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={onClick}
        >
          Places
        </NavLink>
        <NavLink
          to="/Team"
          className={nav.item}
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }
          onClick={onClick}
        >
          Team
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
