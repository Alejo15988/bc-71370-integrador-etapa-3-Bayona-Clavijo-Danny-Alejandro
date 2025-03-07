import React from 'react';
import menuItems from "../constants/menuItems";
import NavItem from "./NavItem";
import './Navbar.scss'; // Importa el archivo SCSS aquí

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__nav-list">
        {
          menuItems.map(item => (
            <NavItem item={item} key={item.id} />
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
