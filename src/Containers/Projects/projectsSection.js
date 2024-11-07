import React from 'react';
import { checkGrammar } from '../../Services/languageTool.service.js';
import './projectsSection.css';

const ProjectsSection = () => {



  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos el servicio para obtener las correcciones
      const result = await checkGrammar("Hi, my names Kendall");
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };



  return (
    <section>
      <div className="container">
        <div className='textArea col-lg-8'>
          <div className='writeArea'>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <textarea
                  id="sentence"
                  name="sentence"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí"
                  required
                ></textarea>
              </div>
              <button className='sendButton' type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div className='textArea col-lg-4'>
          Hola 2
        </div>
      </div>
    </section>
  );

  /* return (
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
   );*/
};

export default ProjectsSection;