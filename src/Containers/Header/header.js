import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6">
                    <Link to="/">
                        <div className='title'>
                            <span>Cementerio de libros</span><br />
                            <h1 className='titleH1'>Olvidados</h1>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-6">
                    <div className="text_img">
                        <img src={process.env.PUBLIC_URL + "/img/frontPage.png"} alt="Front Page" />
                    </div>
                </div>
            </div>  
        </div>
    </header>
    );
};

export default Header;