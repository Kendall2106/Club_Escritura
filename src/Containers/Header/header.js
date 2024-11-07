import React from 'react';
import './header.css';


const Header = () => {
    return (
        <header>
        <nav className="navbar">
          <h1 className="navbar-logo">MiAplicación</h1>
          <ul className="navbar-links">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
};

export default Header;