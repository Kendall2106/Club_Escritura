import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6">
                    <div className='title'>
                        <span>Cementerio de libros</span><br />
                        <h1 className='titleH1'>Olvidados</h1>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div className="text_img">
                        <img src="/img/frontPage.png" alt="Front Page" />
                    </div>
                </div>
            </div>  
        </div>
    </header>
    );
};

export default Header;