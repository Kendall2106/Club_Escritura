import './writeForm.css';
import React, { useState } from 'react';

function WriteForm() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);
  };

  return (
      <form onSubmit={handleSubmit}>
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
}

export default WriteForm;