import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container mt-12">
            <div className="row">
   
                    <Link to="/">
                        <div className='title'>
                            <h1 className='titleH1'>Cementerio de libros</h1>
                            <h1 className='titleH1'>Olvidados</h1>
                        </div>
                    </Link>
              
            </div>  
        </div>
    </header>
    );
};

export default Header;