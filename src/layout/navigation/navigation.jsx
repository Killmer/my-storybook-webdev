import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation">
    <div className="logoWrapper">
      <img src="https://sethreid.co.nz/content/uploads/2017/05/react-logo-2.png" style={{ marginTop: '15px' }} height="60" alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/button">Button</NavLink></li>
        <li><NavLink to="/button-group">Button Group</NavLink></li>
        <li><NavLink to="/icon">Icon</NavLink></li>
        <li><NavLink to="/image">Image</NavLink></li>
        <li><NavLink to="/chip">Chip</NavLink></li>
        <li><NavLink to="/badge">Badge</NavLink></li>
        <li><NavLink to="/list-group">List Group</NavLink></li>
        <li><NavLink to="/input">Input</NavLink></li>
        <li><NavLink to="/tab-bar">Tab Bar</NavLink></li>
        <li><NavLink to="/tooltip">Tooltip</NavLink></li>
        <li><NavLink to="/modal">Modal Window</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
