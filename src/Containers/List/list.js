import React, { useEffect, useState } from 'react';
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
    setAutor('Seleccionar');
  }, [movieService.movies, cuentoService.movies, relatoService.movies]);

  //const data = myVariableFromState === 'poesia' ? movieService.movies : [];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };
  
  const data =
  myVariableFromState === 'poesia' ? movieService.movies :
  myVariableFromState === 'cuento' ? cuentoService.movies :
  myVariableFromState === 'relato' ? relatoService.movies :
  [];


  const [autor, setAutor] = useState('');
  const handleAutorChange = (event) => {
    setAutor(event.target.value);
  };

  var  resultFilter =[];
  const applyFilters = () => {
    resultFilter = data.filter(item => autor === 'Seleccionar' || item.autor === autor);
    resultFilter.sort((a, b) => {
      // Convierte las cadenas de fecha a objetos Date para comparar
      const dateA = new Date(a.date.split('/').reverse().join('/'));
      const dateB = new Date(b.date.split('/').reverse().join('/'));
  
      // Compara las fechas y devuelve el resultado de la comparación
      return dateB - dateA; // Para orden descendente (de más reciente a más antiguo)
      // Puedes cambiar a `return dateA - dateB;` para orden ascendente (de más antiguo a más reciente)
    });
  };

  applyFilters();


  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-12'>
            <div className='col-lg-12'>
            <select id="autor" value={autor} onChange={handleAutorChange}>
                <option >Seleccionar</option>
                <option >Kendall Brown</option>
                <option >Daniel Adams</option>
                <option >Jordy Brenes</option>
            </select>

              <Link to="/form" state={{ variable: myVariableFromState }}>
                <button>Crear</button>
              </Link>
            </div>

            {resultFilter.map((card, index) => (
              <div key={index} className='card col-lg-12'>
                <div className='cardBody'>
                  <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                      <Link to="/workplace" state={{ variable: card }}>
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
                    <p>{truncateText(card.message, 300)}</p>
                    {card.message.length > 300 && (
                      <a href="/">Ver más</a>
                    )}
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