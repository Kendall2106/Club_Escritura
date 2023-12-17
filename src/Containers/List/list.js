import React, { useEffect } from 'react';
import './list.css';
import { Link } from 'react-router-dom';
import MovieService from '../../Services/poesia.services';

const List = () => {
  const movieService = MovieService();

  // Función para convertir la fecha
  /*const convertirFecha = (timestamp) => {
    if (!timestamp) {
      return 'Fecha no válida';
    }
  
    const fecha = new Date(timestamp);
  
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    return `${dia}/${mes}/${anio}`;
  };*/

  

  useEffect(() => {
    // Aquí puedes acceder a las películas desde el servicio
    console.log(movieService.movies);
  }, [movieService.movies]);

  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-12'>
            <div className='col-lg-12'>
              <Link to="/form">
                <button>Crear</button>
              </Link>
            </div>

            {movieService.movies.map((card, index) => (
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