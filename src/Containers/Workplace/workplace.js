import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import './workplace.css';

const Workplace = () => {
  const location = useLocation(); // Use useLocation hook to get the location
  const card = location.state ? location.state.variable : null;
  const myVariable = location.state ? location.state.text : null;

  const timestampDate = (date) => {
    const timestampObject = { seconds: date.seconds, nanoseconds: date.nanoseconds };
    const timestampMilliseconds = timestampObject.seconds * 1000 + Math.floor(timestampObject.nanoseconds / 1e6);
    const fecha = new Date(timestampMilliseconds);
    return fecha;
  }

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

          <div className='card col-lg-12'>
            <div className='cardBody'>
                <div className='row cardHeader'>
                    <div className='izq col-lg-6'>
                          <h1>{card.name}</h1>
                    </div>
                    <div className='der col-lg-6'>
                        <p>{card.autor}</p>
                    </div>
                    <div className=' date col-lg-12'>
                        <h5>{dateFormat(card.date)}</h5>
                    </div>
                </div>
                <div className='cardDesc'>
                <p style={{ whiteSpace: 'pre-line' }}>{card.message}</p>

                </div>
                <div className='arrow'>
                    
                    <Link to="/list" state={{ variable: myVariable }}>
                        <i className="uil uil-arrow-left icono-grande"></i>
                    </Link>
                    <Link to="/">
                        <i className="uil uil-home icono-grande"></i>
                    </Link>
                </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  </section>
  );
};

export default Workplace;