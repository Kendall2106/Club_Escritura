import axios from 'axios';



export const checkGrammar = async (text) => {
    try {
      // Hacemos una solicitud POST a la API de LanguageTool con los headers especificados
      const response = await axios.post(
        'https://api.languagetool.org/v2/check',
        new URLSearchParams({
          text: text,
          language: 'en-US',
          level: 'picky'
        }).toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error("Error al verificar la gramática:", error);
      throw error;
    }
  };