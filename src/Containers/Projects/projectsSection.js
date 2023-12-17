import React from 'react';
import { Link } from 'react-router-dom';

import './projectsSection.css';

const ProjectsSection = () => {
  return (
    <section>
      <div className="three_box">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="box_text">
                        <img className='imagen-proyects' src="./img/cuento.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        <button className="fill" id="btnAbrirModal">Cuento</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="box_text">
                        <img className='imagen-proyects' src="./img/Relato.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        <button className="fill" id="btnAbrirModal">Relato</button>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="box_text">
                        <img className='imagen-proyects' src="img/Poesia.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                    
                        <Link to="/list">
                          <button className="fill">Poesia</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;