import React from 'react';

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
          <li><a className='liGeneric' href="#">Home</a></li>
          <li><a className='liGeneric' href="#list">List</a></li>
          <li><a className='liGeneric' href="#services">Badges</a></li>
          <li><a className='liSettings' href="#contact">Settings</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;