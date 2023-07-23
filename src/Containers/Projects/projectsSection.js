import React from 'react';

import './projectsSection.css';

const ProjectsSection = () => {
  return (
    <section>
      <div class="three_box">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="box_text">
                        <img className='imagen-proyects' src="./img/cuento.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        <button class="fill" id="btnAbrirModal">Cuento</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="box_text">
                        <img className='imagen-proyects' src="./img/Relato.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        <button class="fill" id="btnAbrirModal">Relato</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="box_text">
                        <img className='imagen-proyects' src="./img/Poesia.jpeg"
                        alt='Primer fotografia'/>
                        <br />
                        <br />
                        <button class="fill" id="btnAbrirModal">Poesia</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;