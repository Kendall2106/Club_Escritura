import MovieService from '../../Services/poesia.services';
import './writeForm.css';
import React, { useState } from 'react';

function WriteForm() {
  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [mensaje, setMensaje] = useState('');

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

  const movieService = MovieService(); // Inicializa el servicio



  const handleCreateMovie = async (e) => {
    e.preventDefault(); // Esto evita que la página se refresque

    const newMovie = {
      name: nombre,
      autor: autor,
      date: new Date(),
      message: mensaje
    };

   // console.log(newMovie.name);
    await movieService.createMovie(newMovie);
  };

  return (
    <form onSubmit={handleCreateMovie}>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='body col-lg-12'>
            <div className="form-group">
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