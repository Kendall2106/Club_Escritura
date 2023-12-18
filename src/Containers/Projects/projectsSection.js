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
                        <img className='imagen-proyects' src={process.env.PUBLIC_URL + "/img/cuento.jpeg"}
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        
                        <Link to="/list" state={{ variable: "cuento" }}>
                          <button className="fill">Cuento</button>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="box_text">
                        <img className='imagen-proyects' src= {process.env.PUBLIC_URL + "/img/Relato.jpeg"}
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        
                        <Link to="/list" state={{ variable: "relato" }}>
                        <button className="fill">Relato</button>
                        </Link>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="box_text">
                        <img className='imagen-proyects' src={process.env.PUBLIC_URL + "/img/Poesia.jpeg"}
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                    
                        <Link to="/list" state={{ variable: "poesia" }}>
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