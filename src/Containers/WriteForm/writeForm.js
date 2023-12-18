
import MovieService from '../../Services/poesia.services';
import CuentoService from '../../Services/cuento.services';
import RelatoService from '../../Services/relato.services';
import './writeForm.css';
import React, { useState } from 'react';
import {useLocation, useNavigate } from 'react-router-dom';



function WriteForm() {


  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [mensaje, setMensaje] = useState('');


  const movieService = MovieService();
  const cuentoService = CuentoService();
  const relatoService = RelatoService();

  const navigate = useNavigate(); 
  const location = useLocation(); // Use useLocation hook to get the location
  const myVariableFromState = location.state ? location.state.variable : null;

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleAutorChange = (event) => {
    setAutor(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  /*const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);
  };*/




  const handleCreateMovie = async (e) => {
    e.preventDefault(); // Esto evita que la página se refresque

    const today = new Date();

    // Obtener día, mes y año
    const day = today.getDate();
    const month = today.getMonth() + 1; // Los meses van de 0 a 11, así que sumamos 1
    const year = today.getFullYear();

    // Formatear la fecha como día/mes/año
    const formattedDate = `${day}/${month}/${year}`;

    const newMovie = {
      name: nombre,
      autor: autor,
      date: formattedDate,
      message: mensaje
    };

    if(myVariableFromState==="relato"){
      await relatoService.createMovie(newMovie);
    }else if(myVariableFromState==="poesia"){
      await movieService.createMovie(newMovie);
    }else if(myVariableFromState==="cuento"){
      await cuentoService.createMovie(newMovie);
    }

    navigate('/');
   // console.log(newMovie.name);
  };



  return (
    <form onSubmit={handleCreateMovie}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-10'>
            <div className="form-group">
              Titulo: 
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={nombre}
                onChange={handleNombreChange}
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="form-group">
              Autor: 
              <select id="autor" value={autor} onChange={handleAutorChange}>
                <option value="">Seleccionar</option>
                <option >Kendall Brown</option>
                <option >Daniel Adams</option>
                <option >Jordy Brenes</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                id="mensaje"
                name="mensaje"
                value={mensaje}
                onChange={handleMensajeChange}
                rows="20"
                placeholder="Escribe tu mensaje aquí"
              ></textarea>
            </div>
            
              <button className='send' type="submit">Enviar</button>
            
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default WriteForm;