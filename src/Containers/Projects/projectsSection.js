import React, { useState, useEffect } from 'react';
//import { checkGrammar } from '../../Services/languageTool.service.js';
import { createSentence, loadStreak, countSentencesByWeek, loadBadgeById, updateStreak } from '../../Services/sentences.services.js';

//import OpenAIService from './chatGPT.service';
import './projectsSection.css';



const ProjectsSection = () => {

  const [sentence, setSentence] = useState('');
  const [streak, setStreak] = useState([]);
  const [numSentences, setNumSentences] = useState();
  const [percentage, setPercentage] = useState();
  const [badge, setBadges] = useState([]);
  // const sentenceService = SentencesService();

  // Función para manejar el envío del formulario
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usamos el servicio para obtener las correcciones
      const result = await checkGrammar("when usually is the dinner");
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }
  };*/

  useEffect(() => {
    const fetchStreak = async () => {
      const data = await loadStreak(new Date());
      const numS = await countSentencesByWeek();
      const badgeTemp = await loadBadgeById(data.idBadge);
      console.log(badgeTemp);
      setStreak(data);
      setBadges(badgeTemp);
      setNumSentences(numS);
      setPercentage((numS / data.finalStreak) * 100);
    };

    fetchStreak();
  }, []);



  const sentenceChange = (event) => {
    setSentence(event.target.value);
  };

  const create = async (e) => {
    e.preventDefault(); // Esto evita que la página se refresque

    const newSentence = {
      sentence: sentence,
      translation: "NA",
      date: new Date()
    };

    setSentence('');
    // console.log(newSentence.sentence);
    await createSentence(newSentence);

    const numSentenceTemp = numSentences;
    setNumSentences(numSentenceTemp + 1);
    setPercentage(((numSentenceTemp + 1) / streak?.finalStreak) * 100);

    if (numSentenceTemp + 1 > badge.streak) {
      updateBadge();
    }

    // navigate('/list');
    // console.log(newMovie.name);
  };

  const updateBadge = async () => {
    // Convierte idBadge a número y le suma 1
    const streakTemp = await updateStreak(streak.id, Number(streak.idBadge) + 1);
    setStreak(streakTemp);
    const badgeTemp = await loadBadgeById(streakTemp.idBadge);
    setBadges(badgeTemp);

  };


  return (
    <section>

      <div className="container">
        <div className='col-lg-12 row'>
          <div className='textArea col-lg-7 col-12'>
            <div className='writeArea'>
              <form onSubmit={create}>
                <div className="form-group">
                  <textarea
                    id="sentence"
                    name="sentence"
                    rows="5"
                    value={sentence}
                    onChange={sentenceChange}
                    placeholder="Escribe tu mensaje aquí"
                    required
                  ></textarea>
                </div>


                <button className='sendButton' type="submit">Enviar</button>


              </form>
            </div>
          </div>
          <div className='textArea col-lg-4 col-12'>
          {streak != null ? (
            <h1>{streak.name}</h1>
          ) : (
            <h1>Sin racha</h1>
          )}

          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${percentage}%` }}>
                <div className="progress-text">

                  {numSentences} / {badge.streak}
                </div>
              </div>
            </div>
          </div>

          <h5>{badge.name}</h5>


        </div>
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