import axios from 'axios';


export const checkGrammar = async (text) => {
  try {
    // Hacemos una solicitud POST a la API de LanguageTool
    const response = await axios.post('https://api.languagetool.org/v2/check', {
      text: text,
      language: 'en-US',  // Idioma inglés
    });

    // Si la solicitud es exitosa, devolvemos las correcciones
    return response.data.matches;
  } catch (error) {
    // Si ocurre un error, devolvemos un mensaje de error
    throw new Error('Error al conectar con el servicio de corrección.');
  }
};