import React, { useEffect } from 'react';
import './list.css';
import { Link, useLocation } from 'react-router-dom';
import MovieService from '../../Services/poesia.services';
import CuentoService from '../../Services/cuento.services';
import RelatoService from '../../Services/relato.services';

const List = (props) => {
  const movieService = MovieService();
  const cuentoService = CuentoService();
  const relatoService = RelatoService();
  const location = useLocation(); // Use useLocation hook to get the location
  const myVariableFromState = location.state ? location.state.variable : null;



  useEffect(() => {
  }, [movieService.movies, cuentoService.movies]);

  //const data = myVariableFromState === 'poesia' ? movieService.movies : [];

  const data =
  myVariableFromState === 'poesia' ? movieService.movies :
  myVariableFromState === 'cuento' ? cuentoService.movies :
  myVariableFromState === 'relato' ? relatoService.movies :
  [];


  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-12'>
            <div className='col-lg-12'>
              <Link to="/form">
                <button>{myVariableFromState}</button>
              </Link>
            </div>

            {data.map((card, index) => (
              <div key={index} className='card col-lg-12'>
                <div className='cardBody'>
                  <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                      <Link to="/workplace">
                        <h1>{card.name}</h1>
                      </Link>
                    </div>
                    <div className='der col-lg-6'>
                      <p>{card.autor}</p>
                    </div>
                    <div className='col-lg-12'>
                      <h5>{card.date}</h5>
                    </div>
                  </div>
                  <div className='cardDesc'>
                    <p>{card.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;