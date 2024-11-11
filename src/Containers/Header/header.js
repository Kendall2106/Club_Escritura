import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
  return (
    <header>
      <nav className="navbar">


        <h1 className="navbar-logo">
          <img className='babble' src={process.env.PUBLIC_URL + "/img/babero.png"} alt='Babero icono'/>
   
          <span style={{paddingLeft:'2%'}}>BaBBle</span>
        </h1>
        <ul className="navbar-links">
          <li><Link className="liGeneric" to="/">Home</Link></li>
          <li><Link className="liGeneric" to="/list">List</Link></li>
          <li><Link className="liGeneric" to="/workplace">Badges</Link></li>
          <li><Link className="liSettings" to="/form">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;