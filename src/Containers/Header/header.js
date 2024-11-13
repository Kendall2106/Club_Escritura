import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
    <div className="container-fluid bg-red">
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand d-flex align-items-center" style={{ textDecoration: 'none' }}>
          <img className="babble" src={`${process.env.PUBLIC_URL}/img/babero.png`} alt="Babero icono" />
          <span style={{ paddingLeft: '2%' }}>BaBBle</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/workplace">Badges</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link liSettings" to="/form" style={{color:'white'}}>Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;