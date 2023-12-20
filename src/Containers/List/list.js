import React, { useEffect, useState } from 'react';
import './list.css';
import { Link, useLocation } from 'react-router-dom';
import MovieService from '../../Services/poesia.services';
import CuentoService from '../../Services/cuento.services';
import RelatoService from '../../Services/relato.services';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 5; // Número de elementos por página

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

  const timestampDate = (date) => {
    const timestampObject = { seconds: date.seconds, nanoseconds: date.nanoseconds };
    const timestampMilliseconds = timestampObject.seconds * 1000 + Math.floor(timestampObject.nanoseconds / 1e6);
    const fecha = new Date(timestampMilliseconds);
    return fecha;
  }
  
  const [autor, setAutor] = useState('');
  const handleAutorChange = (event) => {
    setAutor(event.target.value);
  };

  var  resultFilter =[];
  const applyFilters = () => {
    resultFilter = data.filter(item => autor === 'Seleccionar' || item.autor === autor);
    resultFilter.sort((a, b) => {
      // Convierte las cadenas de fecha a objetos Date para comparar
      const dateA = timestampDate(a.date);
      const dateB = timestampDate(b.date);
  
      // Compara las fechas y devuelve el resultado de la comparación
      return dateB - dateA; // Para orden descendente (de más reciente a más antiguo)
      // Puedes cambiar a `return dateA - dateB;` para orden ascendente (de más antiguo a más reciente)
    });
  };


 


  applyFilters();

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedData = resultFilter.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );



  const dateFormat = (date) => {
    const day = timestampDate(date).getDate();
    const month = timestampDate(date).getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
    const year = timestampDate(date).getFullYear();
    return day+"/"+month+"/"+year;
  };

  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-12'>
            <div className='row col-lg-12'>
              <div className='col-lg-6'>
                <select id="autor" value={autor} onChange={handleAutorChange}>
                    <option >Seleccionar</option>
                    <option >Kendall Brown</option>
                    <option >Daniel Adams</option>
                    <option >Jordy Brenes</option>
                </select>
              </div>
              <div className='btnCrear col-lg-6'>
                <Link to="/form" state={{ variable: myVariableFromState }}>
                  <button>Crear</button>
                </Link>
              </div>
            </div>
            

            {paginatedData.map((card, index) => (
              <div key={index} className='card col-lg-12'>
                <div className='cardBody'>
                  <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                      <Link to="/workplace" state={{ variable: card, text: myVariableFromState }}>
                        <h1>{card.name}</h1>
                      </Link>
                    </div>
                    <div className='der col-lg-6'>
                      <p>{card.autor}</p>
                    </div>
                    <div className='col-lg-12'>
                      <h5>{dateFormat(card.date)}</h5>
                    </div>
                  </div>
                  <div className='cardDesc'>
                  
                  <p style={{ whiteSpace: 'pre-line' }}>
                    {truncateText(card.message, 250)}
                    {card.message.length > 250 && (

                      <Link to="/workplace" state={{ variable: card, text: myVariableFromState }}>
                           Ver más 
                      </Link>
                    )}
                  </p>
                  </div>

                </div>
              </div>
            ))}

<ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        pageCount={Math.ceil(resultFilter.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName='active'
        pageClassName={'page-item'} // Estilo de cada página
        breakClassName={'break-me'}
        previousClassName={'previous'}
        nextClassName={'next'}
        pageLinkClassName={'page-link'} // Estilo del enlace de cada página
        previousLinkClassName={'previous-link'}
        nextLinkClassName={'next-link'}
        disabledClassName={'disabled'}
      />


          </div>
        </div>
      </div>
    </section>
  );
};

export default List;