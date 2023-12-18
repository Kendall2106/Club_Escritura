import React from 'react';
import {useLocation } from 'react-router-dom';


const Workplace = () => {
  const location = useLocation(); // Use useLocation hook to get the location
  const card = location.state ? location.state.variable : null;

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
                    <div className='col-lg-12'>
                        <h5>{card.date}</h5>
                    </div>
                </div>
                <div className='cardDesc'>
                <p style={{ whiteSpace: 'pre-line' }}>{card.message}</p>

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